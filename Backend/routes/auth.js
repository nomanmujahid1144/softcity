const express = require("express");
const router = express.Router();
const {
  userSignup,
  userLogin
} = require("../controllers/auth.controllers");
// const checkAuth = require("../middleware/check-auth");

router.post("/signup", userSignup);
router.post("/login", userLogin);

module.exports = router;
