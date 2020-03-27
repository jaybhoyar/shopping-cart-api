const Product = require("../models/product");

exports.newProduct = async (req, res, next) => {
	try {
		var product = await Product.create(req.body.product);
		console.log("In Product");
		res.status(200).json({ newProduct: product });
	} catch (error) {
		next(error);
	}
};

exports.allProduct = async (req, res, next) => {
	try {
		var allProducts = await Product.find({});
		res.status(200).json({ Products: allProducts });
	} catch (error) {
		next(error);
	}
};

exports.singleProduct = async (req, res, next) => {
	try {
		var product = await Product.findById(req.params.id);
		res.status(200).json({ product: product });
	} catch (error) {
		next(error);
	}
};
exports.updateProduct = async (req, res, next) => {
	try {
		var product = await Product.findByIdAndUpdate(
			req.params.id,
			req.body.product,
			{ new: true }
		);
		res.status(200).json({ updatedProduct: product });
	} catch (error) {
		next(error);
	}
};

exports.deleteProduct = async (req, res, next) => {
	try {
		var product = await Product.findByIdAndDelete(req.params.id);
		res.status(200).json({ deleteProduct: product });
	} catch (error) {
		next(error);
	}
};
