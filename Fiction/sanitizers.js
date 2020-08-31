const Validator = require("validator");

const fictionInput = (data) => {
	// data = { title, description, category, body }
	let { title, description, category, body } = data;

	title = Validator.trim(title);
	description = Validator.trim(description);
	category = Validator.trim(category);
	body = Validator.trim(body);

	return { title, description, category, body };
};

const searchQuery = (data) => {
	// data = q = "search query"
	let query = Validator.trim(data);

	return query;
};

// sanitizers
module.exports = {
	fictionInput,
	searchQuery
};
