const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const productRouter = require("./products");

// get .....

router.use("/users", userRouter);
router.use("/products", productRouter);

router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to express" });
});

module.exports = router;
