const express = require("express");
const router = express.Router();
const {
  createDataPoint,
  getDataPoint
} = require("../../controllers/datapoints.controllers");

router.post("/createdatapoint", createDataPoint);
router.get("/getalldatapoints", getDataPoint);

module.exports = router;
