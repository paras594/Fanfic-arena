const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	title: String, // String is shorthand for {type: String}
	author: String,
	body: String,
	comments: [{ body: String, date: Date }], // arr of objects
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: Number,
		favs: Number
	}
});

const User = mongoose.model("User", UserSchema);
export default User;
