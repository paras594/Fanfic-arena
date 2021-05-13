const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResetQuerySchema = new Schema({
	id: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	date: { type: Date, default: Date.now },
});

const ResetQuery = mongoose.model("resetqueries", ResetQuerySchema);
module.exports = ResetQuery;
