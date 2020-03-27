const Cart = require("../models/cart");
const User = require("../models/user");
const Item = require("../models/item");

const auth = require("../modules/auth");

exports.allItems = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		var cart = await (await Cart.findById(user.cartId))
			.populate({
				path: "items",
				populate: {
					path: "productId",
					model: "Product"
				}
			})
			.execPopulate();
		var items = await Item.find().populate("ProductId");
		res.status(200).json({ items: cart.items });
	} catch (error) {
		next(error);
	}
};
exports.addItem = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		var item = await Item.create({ productId: req.params.id });
		var cart = await Cart.findByIdAndUpdate(
			user.cartId,
			{
				$push: { items: item.id }
			},
			{ new: true }
		);
		res.status(200).json({ cart });
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
