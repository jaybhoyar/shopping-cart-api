const express = require("express");
const router = express.Router();
const cartController = require("../../controllers/cart");
const auth = require("../../modules/auth");

router.get("/", auth.validateJWT, cartController.allItems);
router.post("/add/:id", auth.validateJWT, cartController.addItem);
// router.delete("/delete/:id", auth.validateJWT, cartController.deleteItem);

module.exports = router;
