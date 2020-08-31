const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	fullname: {
		type: String
	},
	userImage: {
		type: String,
		default: "/images/default-profile-image.png"
	},
	fictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Fiction"
		}
	],
	likedFictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Fiction"
		}
	],
	savedFictions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Fiction"
		}
	],
	joinedAt: {
		type: Date,
		default: Date.now
	},
	followers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	following: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	favouriteCategories: [String]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
