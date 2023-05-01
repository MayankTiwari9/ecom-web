const express = require("express");
const { registerUser, loginUser, getUserDetails, getAllUsers, getSingleUser, deleteUser, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(getUserDetails);
router.route("/admin/users").get(getAllUsers);
router.route("/admin/user/:id").get(getSingleUser).delete(deleteUser);

module.exports = router;