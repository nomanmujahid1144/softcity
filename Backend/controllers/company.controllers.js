const { uploadImage, randomPassword } = require('../helpers/helpers');
const CreateCompany = require('../models/Company');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

exports.createNewCompany = async (req, res, next) => {
    try {
        console.log(req.query, 'req.query')
        console.log(req.files, 'req.files');

        req.body.password = randomPassword();
        const pass = req.body.password;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pass, salt);

        const {
            companyName,
            companyLocation,
            companyPhoneNumber,
            companyEmail,
            companyAbout,
            companySize,
            companyEstimatedRevenue,

            companyContactPerson,
            companyContactPersonEmail,
            companyContactPersonPhoneNumber

        } = req.query.values;

        let companyInfo = await CreateCompany.findOne({ companyEmail : companyEmail });
        console.log(companyInfo, 'companyInfo')

        if (companyInfo) {
            return res.status(409).json({
                success: false,
                message: "Account with this email already exixts",
                data: null
            })
        } else {

            let companyLogo = '';
            let companyContactPersonImage = '';

            if (req.files) {
                if (req.files.companyLogo) {
                    const uploadedPath = await uploadImage(req.files.companyLogo, next);
                    companyLogo = uploadedPath.photoPath;
                }

                if (req.files.companyContactPersonImage) {
                    const uploadedPath2 = await uploadImage(req.files.companyContactPersonImage, next);
                    companyContactPersonImage = uploadedPath2.photoPath;
                }

            }


            // if there are no errors, create a new CreateDataPoint and save it
            const createCompany = new CreateCompany({
                companyName,
                companyLogo,
                companyLocation,
                companyPhoneNumber,
                companyEmail,
                password: hash,
                companyAbout,
                companySize,
                companyEstimatedRevenue,
                
                companyContactPerson,
                companyContactPersonImage,
                companyContactPersonEmail,
                companyContactPersonPhoneNumber
            });
    
            const savedDataPoint = await createCompany.save();

            if (!savedDataPoint) {
                return next(new ErrorResponse("Signup failed", 400));
            }
            ejs.renderFile(
                __dirname + "/../views/companyEmail.ejs",
                {
                    user: savedDataPoint,
                    password: pass,
                    emailHeader: `Account Creation Confirmation for ${savedDataPoint.companyName}`,
                    emailMessage: "Congratulations! Your company account has been successfully created. Please check your email for login credentials. Welcome aboard!",
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
                        to: savedDataPoint.companyEmail, // list of receivers
                        subject: `Your Company ${savedDataPoint.companyName} has been registered`, // Subject line
                        html: data,
                    };

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
                        data: savedDataPoint
                    })
                }
                }
            );
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.updateCompany = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        // const {
        //     companyName,
        //     companyLocation,
        //     companyPhoneNumber,
        //     companyEmail,
        //     companyAbout,
        //     companySize,
        //     companyEstimatedRevenue,

        //     companyContactPerson,
        //     companyContactPersonEmail,
        //     companyContactPersonPhoneNumber
        // } = req.query.values;

        const body = req.query.values;

        if (req.files) {
            if (req.files.companyLogo) {
                const uploadedPath = await uploadImage(req.files.companyLogo, next);
                body.companyLogo = uploadedPath.photoPath;
            }

            if (req.files.companyContactPersonImage) {
                const uploadedPath2 = await uploadImage(req.files?.companyContactPersonImage, next);
                body.companyContactPersonImage = uploadedPath2.photoPath;
            }
        }

        const savedDataPoint = await CreateCompany.findByIdAndUpdate(req.params.id, body)

        // return the saved data point
        // return res.status(200).json(savedDataPoint);
        return res.status(200).json({
            success: true,
            message: "Company Updated Succesfully",
            data: savedDataPoint
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.getCompanies = async (req, res, next) => {

    try {
        const companies = await CreateCompany.find({})
        
        if (companies) {
            return res.status(200).json({
                success: true,
                message: 'Got Companies Successfully',
                data: companies
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No company Found',
            data: []
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

exports.getCompany = async (req, res, next) => {

    try {
        const company = await CreateCompany.findById(req.params.id)
        
        if (company) {
            return res.status(200).json({
                success: true,
                message: 'Got Company Successfully',
                data: company
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Company Found',
            data: []
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

exports.deleteCompanies = async (req, res, next) => {

    const deletePromises = req.query.IDS.map(async (element) => {
        try {
            const deleteDataTemplate = await CreateCompany.deleteOne({ _id: new mongoose.Types.ObjectId(element) });
            if (deleteDataTemplate.deletedCount >= 1) {
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

    // try {
    //     const company = await CreateCompany.findByIdAndDelete(req.params.id)
        
    //     if (company) {
    //         return res.status(200).json({
    //             success: true,
    //             message: 'Deleted Company Successfully',
    //             data: company
    //         });

    //     }
    //     return res.status(200).json({
    //         success: false,
    //         message: 'No Company Found',
    //         data: []
    //     });
    // }
    // catch (err) {
    //     return res.status(200).json({
    //         success: false,
    //         message: err.message,
    //         data: []
    //     });
    // }
}