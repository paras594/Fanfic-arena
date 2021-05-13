const express = require("express");
const router = express.Router();
const userController = require("./user.controller.js");
const uploadImage = require("../utils/uploadImage.js");

const passport = require("passport");

// route: /api/users/
router.get("/paras", (req, res) => {
	res.json({ paras: "here" });
});

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

router.post("/forgot-password", userController.forgotPassword);
router.patch("/reset-password", userController.resetPassword);

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
		session: false,
	}),
	userController.getSavedFictions
);

// connections means followers/following
router.get(
	"/:userId/connections",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false,
	}),
	userController.getConnections
);

router.get("/:userId", userController.getUser);
router.patch(
	"/profile",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false,
	}),
	uploadImage.single("selectedFile"),
	userController.updateUserProfile
);

router.patch(
	"/password",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false,
	}),
	userController.updateUserPassword
);

router.post(
	"/:userId/follow",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false,
	}),
	userController.followUser
);

router.post(
	"/:userId/unfollow",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false,
	}),
	userController.unfollowUser
);

module.exports = router;
