const User = require("../models/user");
const Product = require("../models/product");

const auth = require("../modules/auth");

exports.register = async (req, res, next) => {
	try {
		const user = await User.create(req.body.user);
		const token = await auth.generateJWT(user, next);
		user.token = token;
		res.status(200).json({ user });
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
		var product = await Product.find({});
		res.json({ product });
	} catch (error) {
		next(error);
	}
};