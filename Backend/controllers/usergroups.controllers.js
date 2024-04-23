const UserGroups = require('../models/UserGroups');
const mongoose = require('mongoose');

exports.createUserGroup = async (req, res, next) => {
    try {
        console.log(req.body)
        // const { dataTemplateName, description, dataPoints } = req.body;
        // const {companyId, GroupName, ApprovingOfficers, subGroup, roles, users } = req.body;

        const userGroupId = req.body.subGroup;
        let subGroup;
        
        if (userGroupId) {
            const isValidObjectId = mongoose.Types.ObjectId.isValid(userGroupId);

            if (!isValidObjectId) {
                return res.status(400).json({ error: 'Invalid subGroup ObjectId' });
            }

            subGroup = mongoose.Types.ObjectId(userGroupId);
        } else {
            subGroup = null; // Set subGroup to null if it's an empty string
        }

        // if there are no errors, create a new CreateDataPoint and save it
        const createUserGroup = new UserGroups({
            GroupName: req.body.GroupName,
            ApprovingOfficers: req.body.ApprovingOfficers,
            subGroup: subGroup,
            roles: req.body.roles,
            users: req.body.users,
            companyId: req.body.companyId,
        });

        const savedUserGroup = await createUserGroup.save();

        // return the saved data point
        // return res.status(200).json(savedUserGroup);
        return res.status(200).json({
            success: true,
            message: "Usergroup Created Succesfully",
            data: savedUserGroup
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.updateUserGroup = async (req, res, next) => {
    try {
        const id = req.query.id;
        // const { dataTemplateName, description, dataPoints } = req.body;
        // const { GroupName, ApprovingOfficers, subGroup, roles, users } = req.body;

        const body = req.body;

        const updatedUserGroup = await UserGroups.findByIdAndUpdate({
            _id: mongoose.Types.ObjectId(id)
        }, body, { new: true });
        
        if (!updatedUserGroup) {
            return res.status("User Group Update Failed", 400);
        }
        return res.status(200).json({
            success: true,
            message: "User Group Updated Succesfully",
            data: updatedUserGroup
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.getUserGroup = async (req, res, next) => {

    try {
        const userGroup = await UserGroups.findById(req.params.id).populate('companyId')
        

        if (userGroup) {
            return res.status(200).json({
                success: true,
                message: 'Got User Group Successfully',
                data: userGroup
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No User Group Found',
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
exports.getUserGroups = async (req, res, next) => {

    try {
        const userGroup = await UserGroups.find({}).populate('companyId').populate('subGroup')
        

        if (userGroup) {
            return res.status(200).json({
                success: true,
                message: 'Got User Groups Successfully',
                data: userGroup
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No User Group Found',
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

exports.deleteUserGroups = async (req, res, next) => {
    const deletePromises = req.query.IDS.map(async (element) => {
        try {
            const deleteDataTemplate = await UserGroups.deleteOne({ _id: new mongoose.Types.ObjectId(element) });
            if (deleteDataTemplate.deletedCount >= 1) {
                return 1; // Return 1 to indicate successful deletion
            } else {
                return 0; // Return 0 to indicate unsuccessful deletion
            }
        } catch (error) {
            console.error("Error deleting user groups:", error);
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
    
}