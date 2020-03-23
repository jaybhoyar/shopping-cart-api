const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Users Route" });
});
router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
