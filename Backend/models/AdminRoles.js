const mongoose = require('mongoose');
const { Schema } = mongoose

const adminRolesSchema = new Schema({
    roleName: {
        type: String,
        required: true,
        default: ''
    },
    // roles: {
    //     type: Array,
    //     default: [],
    //     required: true
    // },
    roles: {
        createDatapoint: {
            type: Boolean,
            default: false,
        },
        viewDatapoint: {
            type: Boolean,
            default: false,
        },
        updateDatapoint: {
            type: Boolean,
            default: false,
        },
        deleteDatapoint: {
            type: Boolean,
            default: false,
        },

        createDataCollection: {
            type: Boolean,
            default: false,
        },
        viewDataCollection: {
            type: Boolean,
            default: false,
        },
        updateDataCollection: {
            type: Boolean,
            default: false,
        },
        deleteDataCollection: {
            type: Boolean,
            default: false,
        },

        createCharts: {
            type: Boolean,
            default: false,
        },
        viewCharts: {
            type: Boolean,
            default: false,
        },
        updateCharts: {
            type: Boolean,
            default: false,
        },
        deleteCharts: {
            type: Boolean,
            default: false,
        },

        createDashboard: {
            type: Boolean,
            default: false,
        },
        viewDashboard: {
            type: Boolean,
            default: false,
        },
        updateDashboard: {
            type: Boolean,
            default: false,
        },
        deleteDashboard: {
            type: Boolean,
            default: false,
        },

        createUserGroup: {
            type: Boolean,
            default: false,
        },
        viewUserGroup: {
            type: Boolean,
            default: false,
        },
        updateUserGroup: {
            type: Boolean,
            default: false,
        },
        deleteUserGroup: {
            type: Boolean,
            default: false,
        },
        assignUserGroup: {
            type: Boolean,
            default: false,
        },

        createCompanyUser: {
            type: Boolean,
            default: false,
        },
        viewCompanyUser: {
            type: Boolean,
            default: false,
        },
        updateCompanyUser: {
            type: Boolean,
            default: false,
        },
        deleteCompanyUser: {
            type: Boolean,
            default: false,
        },

        createAdminRoleManagement: {
            type: Boolean,
            default: false,
        },
        viewAdminRoleManagement: {
            type: Boolean,
            default: false,
        },
        updateAdminRoleManagement: {
            type: Boolean,
            default: false,
        },
        deleteAdminRoleManagement: {
            type: Boolean,
            default: false,
        },

        createCompany: {
            type: Boolean,
            default: false,
        },
        viewCompany: {
            type: Boolean,
            default: false,
        },
        updateCompany: {
            type: Boolean,
            default: false,
        },
        deleteCompany: {
            type: Boolean,
            default: false,
        },
    },
    companyId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('AdminRoles', adminRolesSchema)
