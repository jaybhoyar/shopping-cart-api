const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Products Route" });
});
router.get("/new", productController.newProduct);
module.exports = router;
