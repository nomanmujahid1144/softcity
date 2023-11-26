const mongoose = require('mongoose');
const { Schema } = mongoose

const CreateUserGroupSchema = new Schema({
    GroupName: {
        type: String,
        required: true,
    },
    ApprovingOfficers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    subGroup: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserGroups',
        default: null,
    },
    roles: {
        dataCollectors: {
            type: Boolean,
            default: false,
        },
        dashboardViewers: {
            type: Boolean,
            default: false,
        },
        administrators: {
            type: Boolean,
            default: false,
        }
    },
    users :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('UserGroups', CreateUserGroupSchema)
