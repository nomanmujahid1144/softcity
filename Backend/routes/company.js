const express = require("express");
const router = express.Router();
const {
    createNewCompany,
    updateCompany,
    getCompanies,
    getCompany,
    deleteCompanies
} = require("../controllers/company.controllers");

router.post("/createcompany", createNewCompany);
router.patch("/updatecompany/:id", updateCompany);
router.get("/getallcompanies", getCompanies);
router.get("/getcompany/:id", getCompany);
router.delete("/deletecompanies", deleteCompanies);

module.exports = router;
