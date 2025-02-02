const mongoose = require('mongoose');
const { Schema } = mongoose

const companySchema = new Schema({
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
        required: [true, 'Please add email'],
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Please add a valid email'
        ],
        unique: [true, "This email already exists"],
        lowercase: true,
        trim: true     
    },
    password: {
        type: String,
        required: [true, "Please provide password"]
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


    companyContactPerson:  {
        type: String,
        default: ''       
    },
    companyContactPersonEmail:  {
        type: String,
        default: ''       
    },
    companyContactPersonImage:  {
        type: String,
        default: ''       
    },
    companyContactPersonPhoneNumber: {
        type: String,
        default: ''       
    },
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema)
