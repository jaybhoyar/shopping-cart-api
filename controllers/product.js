const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const auth = require("../modules/auth");

exports.newProduct = async (req, res, next) => {
	try {
		var product = await Product.create(req.body.product);
		res.status(200).json({ newProduct: product });
	} catch (error) {
		next(error);
	}
};