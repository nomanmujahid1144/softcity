const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        default:'',
        trim: true     
    },
    lastName:{
        type:String,
        default:'',
        trim: true     
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please add a valid email'
        ],
        unique: [true, "This email already exists"],
        lowercase: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    administrativeRole: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AdminRoles',
        default: null
    },
    userGroups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserGroup'
    }],
    password: {
        type: String,
        required: [true, "Please provide password"]
    },
    role: {
        type: String,
        default:''
    },
    profilePhoto:{
        type:String,
        default:''
    },


    isSoftCityCompany: {
        type: Boolean,
        default: false
    },
    isCompany: {
        type: Boolean,
        default: false
    },


    // If it is Company User (Super Admin) then we required this info
    companyName: {
        type: String,
        default: ''       
    },
    companyLogo: {
        type: String,
        default: ''       
    },
    companyLocation: {
        type: String,
        default: ''       
    },
    companyPhoneNumber: {
        type: String,
        default: ''       
    },
    companyEmail: {
        type: String,
        // match: [
        //     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        //     'Please add a valid email'
        // ],
        // unique: [true, "This email already exists"],
        lowercase: true,
        // trim: true,
        // default: ''
    },
    companyAbout: {
        type: String,
        default: ''       
    },
    companySize: {
        type: String,
        default: ''       
    },
    companyEstimatedRevenue: {
        type: String,
        default: ''       
    },

    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);
