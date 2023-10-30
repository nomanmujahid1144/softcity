const CreateCompany = require('../models/Company');
const mongoose = require('mongoose');

exports.createNewCompany = async (req, res, next) => {
    try {
        console.log(req.query, 'req.query')
        console.log(req.files, 'req.files');
        const {
            companyName,
            companyLocation,
            companyPhoneNumber,
            companyEmail,
            companyAbout,
            companySize,
            companyEstimatedRevenue,

            companyContactPerson,
            companyContactPersonEmail,
            companyContactPersonPhoneNumber

        } = req.query.values;

        let companyInfo = await CreateCompany.findOne({ companyEmail : companyEmail });
        console.log(companyInfo, 'companyInfo')

        if (companyInfo) {
            return res.status(409).json({
                success: false,
                message: "Account with this email already exixts",
                data: null
            })
        } else {

            // if there are no errors, create a new CreateDataPoint and save it
            const createCompany = new CreateCompany({
                companyName,
                companyLocation,
                companyPhoneNumber,
                companyEmail,
                companyAbout,
                companySize,
                companyEstimatedRevenue,
                
                companyContactPerson,
                companyContactPersonEmail,
                companyContactPersonPhoneNumber
            });
    
            const savedDataPoint = await createCompany.save();
    
            // return the saved data point
            // return res.status(200).json(savedDataPoint);
            return res.status(200).json({
                success: true,
                message: "Company Created Succesfully",
                data: savedDataPoint
            })
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.updateCompany = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.params.id)
        const {
            companyName,
            companyLocation,
            companyPhoneNumber,
            companyEmail,
            companyAbout,
            companySize,
            companyEstimatedRevenue,

            companyContactPerson,
            companyContactPersonEmail,
            companyContactPersonPhoneNumber
        } = req.body;

        const savedDataPoint = await CreateCompany.findByIdAndUpdate(req.params.id, {
            companyName,
            companyLocation,
            companyPhoneNumber,
            companyEmail,
            companyAbout,
            companySize,
            companyEstimatedRevenue,

            companyContactPerson,
            companyContactPersonEmail,
            companyContactPersonPhoneNumber
        })

        // return the saved data point
        // return res.status(200).json(savedDataPoint);
        return res.status(200).json({
            success: true,
            message: "Company Updated Succesfully",
            data: savedDataPoint
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
}

exports.getCompanies = async (req, res, next) => {

    try {
        const companies = await CreateCompany.find({})
        
        if (companies) {
            return res.status(200).json({
                success: true,
                message: 'Got Companies Successfully',
                data: companies
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No company Found',
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

exports.getCompany = async (req, res, next) => {

    try {
        const company = await CreateCompany.findById(req.params.id)
        
        if (company) {
            return res.status(200).json({
                success: true,
                message: 'Got Company Successfully',
                data: company
            });

        }
        return res.status(200).json({
            success: false,
            message: 'No Company Found',
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

exports.deleteCompanies = async (req, res, next) => {

    const deletePromises = req.query.IDS.map(async (element) => {
        try {
            const deleteDataTemplate = await CreateCompany.deleteOne({ _id: new mongoose.Types.ObjectId(element) });
            if (deleteDataTemplate.deletedCount >= 1) {
                return 1; // Return 1 to indicate successful deletion
            } else {
                return 0; // Return 0 to indicate unsuccessful deletion
            }
        } catch (error) {
            console.error("Error deleting data template:", error);
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

    // try {
    //     const company = await CreateCompany.findByIdAndDelete(req.params.id)
        
    //     if (company) {
    //         return res.status(200).json({
    //             success: true,
    //             message: 'Deleted Company Successfully',
    //             data: company
    //         });

    //     }
    //     return res.status(200).json({
    //         success: false,
    //         message: 'No Company Found',
    //         data: []
    //     });
    // }
    // catch (err) {
    //     return res.status(200).json({
    //         success: false,
    //         message: err.message,
    //         data: []
    //     });
    // }
}