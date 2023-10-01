const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');
const ejs = require("ejs");
const { uploadImage } = require("../helpers/helpers");

function randomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const passwordLength = Math.floor(Math.random() * 3) + 6; // Generates a length between 6 and 8

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}

exports.userSignup = async (req, res, next) => {
  try {
    console.log(req.body);
    req.body.password = randomPassword();
    console.log(req.body.password);
    const pass = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);

    let userInfo = await User.findOne({ email: req.body.email });

    if (userInfo) {
      return res.status(409).json({
        success: false,
        message: "Account with this email already exixts",
        data: null
      })
    } else {

      let user = new User({
        ...req.body,
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
      ejs.renderFile(
        __dirname + "/../views/email.ejs",
        {
          user: result,
          password: pass,
          message: "User has been created successfully",
          link: "www.google.com"
        },
        function (err, data) {
          if (err) return err;
          else {
            const transporter = nodemailer.createTransport({
              host: "smtp.office365.com", // Office 365 server
              port: 587, // secure SMTP
              secure: false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
              auth: {
                user: "support@vipinfluencers.com",
                pass: "Sm@rt77385",
              },
              tls: {
                ciphers: "SSLv3",
              },
            });

            // send mail with defined transport object
            const mailOptions = {
              from: '"Softcity" <support@vipinfluencers.com>', // sender address
              to: result.email, // list of receivers
              subject: `Your user has been registered`, // Subject line
              html: data,
            };

            transporter.sendMail(mailOptions, (error, info) => {
              if (error) {
                console.log("........error");
                console.log(error);
              } else {
                console.log("Mail sent : %s", info.response);
                return res.status(200).json({
                  success: true,
                  message: "User Successfully Created",
                  data: result,
                });
              }
            });
          }
        }
      );
      
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse(err, 400));
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    console.log(req.body)
    const result = await User.findOne({ email: req.body.email });
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
          data: result
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
    const allUsers = await User.find({});

    console.log(allUsers, 'USERS')

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
    console.log(req.params.id, 'req.params.id')
      const singleUser = await User.findById(req.params.id)
      
      if (singleUser) {
          return res.status(200).json({
              success: true,
              message: 'Got User Successfully',
              data: singleUser
          });
      }
    
      return res.status(200).json({
          success: false,
          message: 'No User Found',
          data: {}
      });
  }
  catch (err) {
      return res.status(200).json({
          success: false,
          message: err.message,
          data: []
      });
  }
}

exports.deleteUsers = async (req, res, next) => {
  const deletePromises = req.query.IDS.map(async (element) => {
      try {
          const deleteUsers = await User.deleteOne({ _id: new mongoose.Types.ObjectId(element) });
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
          console.log('deleted count', deletedCount);
          if (deletedCount === req.query.IDS.length) {
              return res.status(200).json({
                  success: true,
                  message: "Deleted Successfully",
                  data: null
              });
          } else {
              return res.status(400).json({
                  success: false,
                  data: null,
                  message: 'deletion failed'
              });
          }
      })
      .catch((error) => {
          console.error("Error during deletion:", error);
          return res.status(500).json({ errors: [{ msg: "Server error" }] });
      });
  
}

exports.updateUser = async (req, res, next) => {
  console.log(req.body, "update user");
  try {

    const userId = req.user.data[1];

    let body = JSON.parse(req.query.values);
    console.log(body)
    console.log(req.files)

    if (req.files) {
      const profilePhotoUploaded = await uploadImage(req.files.profilePhoto, next)
      body.profilePhoto = profilePhotoUploaded.photoPath
      console.log(body, " :new body")
    }

    const updatedUser = await User.findOneAndUpdate({
      _id: mongoose.Types.ObjectId(userId)
    }, body, { new: true });
    
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

