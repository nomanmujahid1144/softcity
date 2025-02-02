const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const ejs = require("ejs");
const { uploadImage, randomPassword } = require("../helpers/helpers");


const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

exports.userSignup = async (req, res, next) => {
  try {
    req.body.password = randomPassword();
    const pass = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    console.log(pass, 'pass')
    console.log(hash, 'hash')
    const body = req.query.values;

    // console.log(body, "BODY");
    // console.log(req.files, "files");

    let userInfo = await User.findOne({ email: body.email });

    if (userInfo) {
      return res.status(409).json({
        success: false,
        message: "Account with this email already exixts",
        data: null,
      });
    } else {
      if (req.files) {
        if (req.files.profilePhoto) {
          const uploadedPath = await uploadImage(req.files.profilePhoto, next);
          body.profilePhoto = uploadedPath.photoPath;
        }

        if (req.files.companyLogo) {
          const uploadedPath = await uploadImage(req.files.companyLogo, next);
          body.companyLogo = uploadedPath.photoPath;
        }
      }

      let user = new User({
        ...body,
        password: hash,
      });

      const token = jsonwebtoken.sign(
        {
          data: [user.email, user._id],
          role: user.role,
        },
        "" + process.env.JWT_SECRET
      );
      const result = await user.save();

      if (!result) {
        return next(new ErrorResponse("Signup failed", 400));
      }

      if (body.isCompany === "true") {
        // Sending Email to Company Owner User
        ejs.renderFile(
          __dirname + "/../views/companyEmail.ejs",
          {
            user: result,
            password: pass,
            emailHeader: `Account Creation Confirmation for ${result.companyName}`,
            emailMessage:
              "Congratulations! Your company account has been successfully created. Please check your email for login credentials. Welcome aboard!",
            link: "www.google.com",
          },
          function (err, data) {
            if (err) return err;
            else {

              // WITH THE HELP OF GOOGLE CLIENT ID AND SECRET

              const oauth2Client = new OAuth2(
                process.env.CLIENT_ID, // ClientID
                process.env.CLIENT_SECRET, // Client Secret
                process.env.REDIRECT_URL // Redirect URL
              );
              oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
              });
              const accessToken = oauth2Client.getAccessToken();

              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: process.env.EMAIL,
                  clientId: process.env.CLIENT_ID,
                  clientSecret: process.env.CLIENT_SECRET,
                  refreshToken: process.env.REFRESH_TOKEN,
                  accessToken: accessToken,
                },
              });

              // send mail with defined transport object
              const mailOptions = {
                from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
                to: result.companyEmail, // list of receivers
                subject: `Your Company ${result.companyName} has been registered`, // Subject line
                html: data, // html body
              };

              // WITH THE HELP OF PORT CONFIGURATION

              // const transporter = nodemailer.createTransport({
              //   host: process.env.EMAILHOST, // Domain Host
              //   port: process.env.EMAILPORT, // secure SMTP
              //   secure: true, // false for TLS - as a boolean not string - but the default is false so just remove this completely
              //   auth: {
              //     user: process.env.EMAILUSER,
              //     pass: process.env.EMAILPASSWORD,
              //   }
              // });

              // send mail with defined transport object
              // const mailOptions = {
              //   from: `"Softcity" <${process.env.EMAILUSER}>`, // sender address
              //   to: result.companyEmail, // list of receivers
              //   subject: `Your Company ${result.companyName} has been registered`, // Subject line
              //   html: data,
              // };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log("........error");
                  console.log(error);
                } else {
                  console.log("Mail sent : %s", info.response);
                }
              });
              // return the saved data point
              // return res.status(200).json(savedDataPoint);
              return res.status(200).json({
                success: true,
                message: "Company Created Succesfully",
                data: result,
              });
            }
          }
        );
      } else {
        // Sending Email to Company User
        ejs.renderFile(
          __dirname + "/../views/email.ejs",
          {
            user: result,
            password: pass,
            message: "User has been created successfully",
            link: "www.google.com",
          },
          function (err, data) {
            if (err) return err;
            else {

              // WITH THE HELP OF GOOGLE CLIENT ID AND SECRET

              const oauth2Client = new OAuth2(
                process.env.CLIENT_ID, // ClientID
                process.env.CLIENT_SECRET, // Client Secret
                process.env.REDIRECT_URL // Redirect URL
              );
              oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
              });
              const accessToken = oauth2Client.getAccessToken();

              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: process.env.EMAIL,
                  clientId: process.env.CLIENT_ID,
                  clientSecret: process.env.CLIENT_SECRET,
                  refreshToken: process.env.REFRESH_TOKEN,
                  accessToken: accessToken,
                },
              });

              // send mail with defined transport object
              const mailOptions = {
                from: `"${process.env.SENDER_NAME}" <${process.env.EMAIL}>`, // sender address
                to: result.email, // list of receivers
                subject: `Your user has been registered`, // Subject line
                html: data, // html body
              };

              // const transporter = nodemailer.createTransport({
              //   host: process.env.EMAILHOST, // Domain Host
              //   port: process.env.EMAILPORT, // secure SMTP
              //   secure: true, // false for TLS - as a boolean not string - but the default is false so just remove this completely
              //   auth: {
              //     user: process.env.EMAILUSER,
              //     pass: process.env.EMAILPASSWORD,
              //   }
              // });

              // // send mail with defined transport object
              // const mailOptions = {
              //   from: `"Softcity" <${process.env.EMAILUSER}>`, // sender address
              //   to: result.email, // list of receivers
              //   subject: `Your user has been registered`, // Subject line
              //   html: data,
              // };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log("........error");
                  console.log(error);
                } else {
                  console.log("Mail sent : %s", info.response);
                }
              });
              return res.status(200).json({
                success: true,
                message: "User Successfully Created",
                data: result,
              });
            }
          }
        );
      }
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err, 400));
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await User.findOne({ email: req.body.email }).populate("companyId").populate('administrativeRole', { createdAt: 0, updatedAt: 0, __v: 0, companyId: 0, roleName: 0 });
    
    console.log(result, 'Resut')

    if (!result) {
      // this means result is null
      return next(new ErrorResponse("Incorrect email address", 200));
    } else {
      // email did exist
      // so lets match password
      if (bcrypt.compareSync(req.body.password, result.password)) {
        // great, allow this user access
        const token = jsonwebtoken.sign(
          {
            data: [result.email, result._id],
            role: "user",
          },
          "" + process.env.JWT_SECRET
        );

        return res.status(200).json({
          success: true,
          message: "Successfully Logged in",
          token: token,
          data: result,
        });
      } else {
        return next(new ErrorResponse("Incorrect password", 401));
      }
    }
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({}).populate("companyId");

    console.log(allUsers, "USERS");

    if (allUsers) {
      return res.status(200).json({
        success: true,
        message: "Got All Users Successfully",
        data: allUsers,
      });
    }
    return res.status(200).json({
      success: false,
      message: "No User Found",
      data: [],
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.getAllCompanies = async (req, res, next) => {
  try {
    const allUsers = await User.find({ isCompany: true }).populate("companyId");

    console.log(allUsers, "USERS");

    if (allUsers) {
      return res.status(200).json({
        success: true,
        message: "Got All Companies Successfully",
        data: allUsers,
      });
    }
    return res.status(200).json({
      success: false,
      message: "No Company Found",
      data: [],
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.getAllCompanyUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({ isCompany: false }).populate(
      "companyId"
    );

    console.log(allUsers, "USERS");

    if (allUsers) {
      return res.status(200).json({
        success: true,
        message: "Got All Users Successfully",
        data: allUsers,
      });
    }
    return res.status(200).json({
      success: false,
      message: "No User Found",
      data: [],
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
exports.getSingleUser = async (req, res, next) => {
  try {
    console.log(req.params.id, "req.params.id");
    const singleUser = await User.findById(req.params.id);

    if (singleUser) {
      return res.status(200).json({
        success: true,
        message: "Got User Successfully",
        data: singleUser,
      });
    }

    return res.status(200).json({
      success: false,
      message: "No User Found",
      data: {},
    });
  } catch (err) {
    return res.status(200).json({
      success: false,
      message: err.message,
      data: [],
    });
  }
};

exports.deleteUsers = async (req, res, next) => {
  const deletePromises = req.query.IDS.map(async (element) => {
    try {
      const deleteUsers = await User.deleteOne({
        _id: new mongoose.Types.ObjectId(element),
      });
      if (deleteUsers.deletedCount >= 1) {
        return 1; // Return 1 to indicate successful deletion
      } else {
        return 0; // Return 0 to indicate unsuccessful deletion
      }
    } catch (error) {
      console.error("Error deleting data template:", error);
      return 0; // Return 0 to indicate unsuccessful deletion
    }
  });

  Promise.all(deletePromises)
    .then((results) => {
      const deletedCount = results.reduce((acc, result) => acc + result, 0);
      console.log("deleted count", deletedCount);
      if (deletedCount === req.query.IDS.length) {
        return res.status(200).json({
          success: true,
          message: "Deleted Successfully",
          data: null,
        });
      } else {
        return res.status(400).json({
          success: false,
          data: null,
          message: "deletion failed",
        });
      }
    })
    .catch((error) => {
      console.error("Error during deletion:", error);
      return res.status(500).json({ errors: [{ msg: "Server error" }] });
    });
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = req.query.id;
    console.log(req.user, "req.user");
    let body = req.query.values;
    console.log(body);
    console.log(req.files);

    if (req.files) {
      if (req.files.profilePhoto) {
        const uploadedPath = await uploadImage(req.files.profilePhoto, next);
        body.profilePhoto = uploadedPath.photoPath;
      }

      if (req.files.companyLogo) {
        const uploadedPath = await uploadImage(req.files.companyLogo, next);
        body.companyLogo = uploadedPath.photoPath;
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      {
        _id: mongoose.Types.ObjectId(userId),
      },
      body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status("User Update Failed", 400);
    }

    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (err) {
    return next(new ErrorResponse(err, 400));
  }
};
