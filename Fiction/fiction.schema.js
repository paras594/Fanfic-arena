const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseFuzzySearching = require("mongoose-fuzzy-searching");
const FictionComment = require("./fictionComment.schema.js");

const FictionSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		default:
			"https://res.cloudinary.com/dzujgoodl/image/upload/v1620985190/default-fiction-image_saf2v8.svg",
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	category: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	likesCount: {
		type: Number,
		default: 0,
	},
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	],
	commentsCount: {
		type: Number,
		default: 0,
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "fictioncomments",
		},
	],
});

FictionSchema.plugin(mongooseFuzzySearching, { fields: ["title"] });

const Fiction = mongoose.model("fictions", FictionSchema);
module.exports = Fiction;
