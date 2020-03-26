const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var itemSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product"
	},
	quantity: {
		type: Number
	}
});

module.exports = mongoose.model("Item", itemSchema);
