const Cart = require("../models/cart");
const User = require("../models/user");
const Item = require("../models/item");
const Product = require("../models/product");

exports.allItems = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		var cart = await Cart.findById(user.cartId);
		var items = await Item.find({});
		res.status(200).json({ items });
	} catch (error) {
		next(error);
	}
};

exports.addItem = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		var product = await Product.findById(req.params.id);
		var items = await Item.find({ name: product.name });
		var res = items.find((obj) => obj.name == product.name);
		if (res) {
			var item = await Item.findOneAndUpdate(
				{ name: product.name },
				{ $inc: { quantity: 1 } },
				{ new: true }
			);
		} else {
			var item = await Item.create({
				productId: req.params.id,
				name: product.name,
				quantity: 1,
			});
		}
		var cart = await Cart.findByIdAndUpdate(
			user.cartId,
			{
				$addToSet: { items: item.name },
			},
			{ new: true }
		);
		res.json({ item });
	} catch (error) {
		next(error);
	}
};

exports.deleteItem = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		var cart = await Cart.findByIdAndUpdate(
			user.cartId,
			{
				$pull: { items: req.params.id },
			},
			{ new: true }
		);
		res.status(200).json({ cart });
	} catch (error) {
		next(error);
	}
};
