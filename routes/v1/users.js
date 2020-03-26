const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");
const auth = require("../../modules/auth");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ Response: "Welcome to Users Route" });
});
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/dashboard", auth.validateJWT, userController.dashboard);
router.get("/dashboard/item/:id", auth.validateJWT, userController.singleItem);

module.exports = router;
