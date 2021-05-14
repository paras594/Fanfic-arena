const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
	},
	userImage: {
		type: String,
		default: "/images/default-profile-image.png",
	},
	fictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "fictions",
		},
	],
	likedFictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "fictions",
		},
	],
	savedFictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "fictions",
		},
	],
	joinedAt: {
		type: Date,
		default: Date.now,
	},
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	],
	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	],
	favouriteCategories: [String],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
