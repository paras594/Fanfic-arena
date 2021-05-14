const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FictionCommentSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
	fictionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "fictions",
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const FictionComment = mongoose.model("fictioncomments", FictionCommentSchema);
module.exports = FictionComment;
