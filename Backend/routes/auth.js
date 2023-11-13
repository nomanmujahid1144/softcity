const express = require("express");
const router = express.Router();
const {
  userSignup,
  userLogin,
  getAllUsers,
  getAllCompanyUsers,
  getAllCompanies,
  getSingleUser,
  deleteUsers,
  updateUser
} = require("../controllers/auth.controllers");
const checkAuth = require("../middleware/check-auth");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/getallusers", getAllUsers);
router.get("/get-all-company-users", getAllCompanyUsers);
router.get("/get-all-companies", getAllCompanies);

router.get("/getsingleuser/:id", getSingleUser);
router.delete("/deleteuser", deleteUsers);
router.patch("/updateuser", checkAuth, updateUser);

module.exports = router;
