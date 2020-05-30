var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var cartSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	items: [
		{
			type: String,
		},
	],
});

module.exports = mongoose.model("Cart", cartSchema);
