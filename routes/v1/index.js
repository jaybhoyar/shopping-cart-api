const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const productRouter = require("./products");
const cartRouter = require("./cart");

// get .....

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/cart", cartRouter);

module.exports = router;
