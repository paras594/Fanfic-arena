const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	fictionId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Fiction",
		required: true
	},
	body: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
