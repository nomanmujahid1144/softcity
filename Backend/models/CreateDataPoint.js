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
    createdAt: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Data Points', CreateDataPointSchema)
