const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.json({ Response: "Welcome to Users Route" });
});

module.exports = router;
