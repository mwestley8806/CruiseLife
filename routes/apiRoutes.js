module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const userController = require("../controllers/userController")
	
	router.route("/user")
		.get(userController.findAll)

	router
		.route("/:id")
		.get(userController.findById)
		.put(userController.update)
		.delete(userController.remove);

	return router;
};