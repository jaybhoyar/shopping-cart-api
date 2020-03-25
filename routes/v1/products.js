const express = require("express");
const router = express.Router();
const productController = require("../../controllers/product");
const auth = require("../../modules/auth");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Products Route" });
});
router.post("/new", auth.validateJWT, productController.newProduct);
module.exports = router;
