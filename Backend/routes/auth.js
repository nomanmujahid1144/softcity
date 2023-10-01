const express = require("express");
const router = express.Router();
const {
  userSignup,
  userLogin,
  getAllUsers,
  getSingleUser,
  deleteUsers,
  updateUser
} = require("../controllers/auth.controllers");
// const checkAuth = require("../middleware/check-auth");

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/getallusers", getAllUsers);
router.get("/getsingleuser/:id", getSingleUser);
router.delete("/deleteuser", deleteUsers);
router.patch("/updateuser", updateUser);

module.exports = router;
