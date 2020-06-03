const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var { hash, compare } = require("bcryptjs");

const userSchema = new Schema(
	{
		username: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		photo: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
		isBlocked: {
			type: Boolean,
			default: false,
		},
		token: {
			type: String,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		cartId: {
			type: Schema.Types.ObjectId,
			ref: "Cart",
		},
		favourites: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product",
			},
		],
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	try {
		if (this.password && this.isModified) {
			this.password = await hash(this.password, 10);
			next();
		}
	} catch (error) {
		next(error);
	}
});
userSchema.methods.verifyPassword = async function (password) {
	try {
		return await compare(password, this.password);
	} catch (error) {
		next(error);
	}
};

module.exports = mongoose.model("User", userSchema);
