const express = require("express");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const {
    createUserGroup,
    updateUserGroup,
    getUserGroups,
    getUserGroup,
    deleteUserGroups
} = require("../../controllers/usergroups.controllers");

router.post("/createusergroup", createUserGroup);
router.post("/update-user-group", updateUserGroup);

router.get("/getallusergroups", getUserGroups);
router.get("/getusergroup/:id", getUserGroup);
router.delete("/deleteusergroups", deleteUserGroups);

module.exports = router;
