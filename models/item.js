const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
	},
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
	},
});

module.exports = mongoose.model("Item", itemSchema);
