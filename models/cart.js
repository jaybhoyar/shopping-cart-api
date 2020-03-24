var mongoose = require("mongoose");

var cartSchema = new mongoose.Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	items: {
		type: Schema.Types.ObjectId,
		ref: "Item"
	}
});

module.exports = mongoose.model("Cart", cartSchema);
