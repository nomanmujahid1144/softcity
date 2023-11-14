const mongoose = require('mongoose');
const { Schema } = mongoose

const CreateDataCollectionTemplate = new Schema({
    collectionTemplateName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // CreatedBy: {
    //     type: String,
    //     required: true,
    // },
    selectedDataPoints: [{
        type: Schema.Types.ObjectId,
        ref: 'DataPoints',
    }],
    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('DataCollectionTemplate', CreateDataCollectionTemplate)
