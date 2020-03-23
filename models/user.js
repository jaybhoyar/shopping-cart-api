const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var { hash, compare } = require("bcryptjs");

const userSchema = new Schema(
	{
		username: {
			type: String
		},
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		photo: {
			type: String
		},
		password: {
			type: String,
			required: true
		},
		isBlocked: {
			type: Boolean,
			default: false
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		cartId: {
			type: Schema.Types.ObjectId,
			ref: "Cart"
		},
		favourites: [
			{
				type: Schema.Types.ObjectId,
				ref: "Product"
			}
		]
	},
	{
		timestamps: true
	}
);
