const express = require("express");
const router = express.Router();
const userController = require("./user.controller.js");
const uploadImage = require("../utils/uploadImage.js");

const passport = require("passport");

// route: /api/users/

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
// router.get(
// 	"/auth/google",
// 	passport.authenticate("google", {
// 		scope: ["profile", "email"]
// 	})
// );

router.get(
	"/:userId/savedFictions",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	userController.getSavedFictions
);
router.get("/:userId", userController.getUser);
router.patch(
	"/profile",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	uploadImage.single("selectedFile"),
	userController.updateUserProfile
);

router.patch(
	"/password",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	userController.updateUserPassword
);

module.exports = router;
