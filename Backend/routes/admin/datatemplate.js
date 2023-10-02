const express = require("express");
const { body, validationResult } = require('express-validator');
const router = express.Router();
const {
  createDataTemplate,
  updateDataTemplate,
  getDataTemplates,
  getDataTemplate,
  deleteDataTemplate
} = require("../../controllers/dataTemplate.controllers");

router.post("/createdatatemplate" ,[
  body('dataTemplateName', 'Enter a valid name min 1 characters').isLength({ min: 1 }),
  body('description', 'description length min 5').isLength({ min: 5 }),
], createDataTemplate);

router.patch("/updatedatatemplate/:id" ,[
  body('dataTemplateName', 'Enter a valid name min 1 characters').isLength({ min: 1 }),
  body('description', 'description length min 5').isLength({ min: 5 }),
], updateDataTemplate);

router.get("/getalldatatemplates", getDataTemplates);
router.get("/getdatatemplate/:id", getDataTemplate);
router.delete("/deletedatatemplates", deleteDataTemplate);

module.exports = router;
