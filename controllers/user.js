const User = require("../models/user");
const auth = require("../modules/auth");

exports.register = async (req, res, next) => {
	try {
		var user = await User.create(req.body.user);
		res.status(200).json({ user });
	} catch (error) {
		next(err);
	}
};

exports.login = async (req, res, next) => {
	try {
		var { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ err: "Email and Password Required" });
		}
		var user = await User.findOne({ email });
		if (!user) return res.status(400).json({ err: "Email not Found" });
		var result = await user.verifypassword(password);
		if (!result) return res.status(400).json({ err: "Invalid Password" });
		var token = await auth.generateJWT(user);
		user.token = token;
		res.status(400).json({ user });
	} catch (error) {
		next(error);
	}
};
