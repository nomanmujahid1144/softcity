const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

exports.userSignup = async (req, res, next) => {
    try {
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        let user = new User({
            ...req.body,
            password: hash 
        })
        const token =  jsonwebtoken.sign(
            {
              data: [user.email, user._id],
              role: user.role,
            },
            "" + process.env.JWT_SECRET
          );
        const result = await user.save();
        if (!result) {
            return next(new ErrorResponse('Signup failed', 400))
        }
        return res.status(200).json({
            success: true,
            message: "Signup successfull",
            token
        })
    }
    catch (err) {
        console.log(err)
        return next(new ErrorResponse(err, 400))
    }
}  

exports.userLogin = async (req, res, next) => {
    try {
        const result = await User.findOne({ email: req.body.email });
        if (!result) {
            // this means result is null
            return next(new ErrorResponse('Incorrect email address', 200))
        } else {
            // email did exist
            // so lets match password
            if (bcrypt.compareSync(req.body.password, result.password)) {
                // great, allow this user access
                const token = jsonwebtoken.sign({
                    data: [result.email, result._id],
                    role: 'user'
                }, "" + process.env.JWT_SECRET);
                console.log(token);
                return res.status(200).json({
                    success: true,
                    message: 'Successfully Logged in',
                    token: token
                });
            }
            else {
                return next(new ErrorResponse('Incorrect password', 200))
            }
        }
    }
    catch (err) {
        return next(new ErrorResponse(err, 400))
    }
}

