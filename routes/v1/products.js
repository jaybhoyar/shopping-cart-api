const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Products Route" });
});

module.exports = router;
