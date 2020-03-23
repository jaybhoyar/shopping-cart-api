const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var { hash, compare } = require("bcryptjs");

var productSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		quantity: {
			type: Number,
			required: true,
			default: 0
		},
		price: {
			type: Number,
			required: true
		},
		description: {
			type: String
		},
		tags: [{ type: String }]
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
