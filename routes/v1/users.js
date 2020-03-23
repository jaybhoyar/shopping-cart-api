const express = require("express");
const router = express.Router();
const userController 

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Users Route" });
});
router.post("/register", userController.register);

module.exports = router;
