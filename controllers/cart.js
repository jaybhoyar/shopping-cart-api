const Cart = require("../models/cart");
const User = require("../models/user");

const auth = require("../modules/auth");

exports.allItems = async (req, res, next) => {
	try {
		var user = await User.find({});
		res.status(200).json({ items });
	} catch (error) {
		next(error);
	}
};
exports.addItem = async (req, res, next) => {
	try {
    
	} catch (error) {
		next(error);
	}
};
exports.deleteItem = async (req, res, next) => {
	try {
	} catch (error) {
		next(error);
	}
};
