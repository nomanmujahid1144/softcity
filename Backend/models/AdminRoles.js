const mongoose = require('mongoose');
const { Schema } = mongoose

const adminRolesSchema = new Schema({
    roleName: {
        type: String,
        required: true,
        default: ''
    },
    roles: {
        type: Array,
        required: true,
        default: []
    },
}, { timestamps: true });

module.exports = mongoose.model('AdminRoles', adminRolesSchema)
