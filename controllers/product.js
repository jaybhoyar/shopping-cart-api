const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const auth = require("../modules/auth");

exports.newProduct = async (req, res, next) => {
	try {
		res.json({ msg: "this is new product" });
	} catch (error) {
		next(error);
	}
};

