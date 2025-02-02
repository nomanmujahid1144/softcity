const mongoose = require('mongoose');
const { Schema } = mongoose

const CreateDataPointSchema = new Schema({
    dataPointName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dataPointType: {
        type: String,
        default: 'Text',
        required: true,
    },
    noOfColumns: {
        type: Number,
    },
    data: {
        type: Object,
    },
    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('DataPoints', CreateDataPointSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose

const CreateDataPointSchema = new Schema({
    dataPointName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dataPointType: {
        type: String,
        default: 'Text field',
    },
    enableSheetMode: {
        type: Boolean,
        default: false,
    },
    noOfColumns: {
        type: Number,
    },
    labelColumns: {
        type: [String],
    },
    dataColumns: {
        type: [String],
    },
    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('DataPoints', CreateDataPointSchema)
