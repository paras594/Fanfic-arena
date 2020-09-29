const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseFuzzySearching = require("mongoose-fuzzy-searching");
const FictionComment = require("./fictionComment.schema.js");

const FictionSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		default: "/images/default-fiction-image.svg"
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	category: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	likesCount: {
		type: Number,
		default: 0
	},
	likes: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		}
	],
	commentsCount: {
		type: Number,
		default: 0
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "FictionComment"
		}
	]
});

FictionSchema.plugin(mongooseFuzzySearching, { fields: ["title"] });

const Fiction = mongoose.model("Fiction", FictionSchema);
module.exports = Fiction;
