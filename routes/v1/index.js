const express = require("express");
const router = express.Router();

/* GET home page. */
const userRouter = require("./users");
const productRouter = require("./products");

router.use("/users", userRouter);
router.use("/products", productRouter);

router.get("/", function(req, res, next) {
	res.json({ Response: "Welcome to express" });
});

module.exports = router;
