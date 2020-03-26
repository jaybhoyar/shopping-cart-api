const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");
const auth = require("../../modules/auth");

/* GET home page. */

// Register
router.post("/register", userController.register);
// Login
router.post("/login", userController.login);
// Dashboard
router.get("/dashboard", auth.validateJWT, userController.dashboard);
// Single Item
router.get("/dashboard/item/:id", auth.validateJWT, userController.singleItem);
// All users
router.get("/", auth.isAdmin, userController.allUsers);
// Make a user to Admin
router.put("/makeadmin/:id", auth.isAdmin, userController.makeAdmin);

module.exports = router;
