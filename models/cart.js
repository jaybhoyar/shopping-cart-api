var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var cartSchema = new Schema({
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
