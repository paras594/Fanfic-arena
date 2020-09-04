const express = require("express");
const router = express.Router();
const uploadImage = require("../utils/uploadImage.js");
const passport = require("passport");
const fictionController = require("./fiction.controller.js");

router.post(
	"/",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	uploadImage.single("selectedFile"),
	fictionController.createFiction
);

router.get("/search", fictionController.getSearchResults);

router.get("/categories/:category", fictionController.getFictionByCategory);

router.get("/:fictionId", fictionController.getOneFiction);

router.get("/", fictionController.getFictions);

router.patch(
	"/:fictionId/like",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	fictionController.likeFiction
);

router.patch(
	"/:fictionId/unlike",
	passport.authenticate("jwt", {
		failureRedirect: "/unauthorized",
		session: false
	}),
	fictionController.unlikeFiction
);

// router.post("/test", uploadImage.single("selectedFile"), (req, res) => {
// 	console.log(req.file.filename);
// 	console.log(req.body);
// 	res.json({
// 		message: "file received"
// 	});
// });

module.exports = router;
