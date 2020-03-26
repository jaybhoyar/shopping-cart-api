const User = require("../models/user");
const Product = require("../models/product");
const Cart = require("../models/cart");
const auth = require("../modules/auth");

exports.register = async (req, res, next) => {
	try {
		const user = await User.create(req.body.user);
		const token = await auth.generateJWT(user, next);
		user.token = token;
		const cart = await Cart.create({ userId: user._id });
		const updateUser = await User.findByIdAndUpdate(
			user._id,
			{ cartId: cart._id, upsert: true },
			{ new: true }
		);
		console.log(updateUser);
		res.status(200).json({ updateUser });
	} catch (error) {
		next(error);
	}
};

exports.login = async (req, res, next) => {
	try {
		var { email, password } = req.body.user;
		if (!email || !password) {
			return res.status(400).json({ err: "Email and Password Required" });
		}
		var user = await User.findOne({ email });
		if (!user) return res.status(400).json({ err: "Email not Found" });

		var result = await user.verifyPassword(password);
		if (!result) return res.status(400).json({ err: "Invalid Password" });

		var token = await auth.generateJWT(user);
		user.token = token;

		res.status(200).json({ user });
	} catch (error) {
		next(error);
	}
};

exports.dashboard = async (req, res, next) => {
	try {
		var products = await Product.find({});
		res.status(200).json({ products });
	} catch (error) {
		next(error);
	}
};

exports.singleItem = async (req, res, next) => {
	try {
		var product = await Product.findById(req.params.id);
		res.status(200).json({ product });
	} catch (error) {
		next(error);
	}
};
exports.makeAdmin = async (req, res, next) => {
	try {
		var user = await User.findByIdAndUpdate(
			{ _id: req.params.id },
			{ isAdmin: true },
			{ new: true }
		);
		res.status(200).json({ user });
	} catch (error) {
		next(error);
	}
};

exports.allUsers = async (req, res, next) => {
	try {
		var users = await User.find({});
		res.status(200).json({ users });
	} catch (error) {
		next(error);
	}
};

exports.blockUser = async (req, res, next) => {
	try {
		var user = await User.findByIdAndUpdate(
			{ _id: req.params.id },
			{ isBlocked: true },
			{ new: true }
		);
		res.status(200).json({ user });
	} catch (error) {
		next(error);
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		var user = await User.findById(req.userId);
		if (user._id == req.userId) {
			var user = await User.findByIdAndDelete(req.userId);
			await Cart.findOneAndDelete({ userId: user.id });
			res.status(200).json({ success: "User deleted Successfully" });
		} else {
			res.status(200).json({ error: "Cannot delete user" });
		}
	} catch (error) {
		next(error);
	}
};
