const Validator = require("validator");
const isEmpty = require("is-empty");

const fictionInput = (data) => {
	// data = { title, description, category, body }
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.title = !isEmpty(data.title) ? data.title : "";
	data.description = !isEmpty(data.description) ? data.description : "";
	data.category = !isEmpty(data.category) ? data.category : "";
	data.body = !isEmpty(data.body) ? data.body : "";

	// title checks
	if (Validator.isEmpty(data.title)) {
		errors.title = "Title field is required";
	}

	// description checks
	if (Validator.isEmpty(data.description)) {
		errors.description = "Description field is required";
	}

	// category checks
	if (Validator.isEmpty(data.category)) {
		errors.category = "Category field is required";
	}

	// body checks
	if (Validator.isEmpty(data.body)) {
		errors.body = "Body field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const searchQuery = (data) => {
	// data = "search query"
	let errors = {};

	let query = !isEmpty(data) ? data : "";

	if (Validator.isEmpty(query)) {
		errors.search = "No search input";
	} else if (!Validator.isLength(query, { min: 4 })) {
		errors.search = "Search is too short";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const commentInput = (data) => {
	// data = { comment }
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.comment = !isEmpty(data.comment) ? data.comment : "";

	if (Validator.isEmpty(data.comment)) {
		errors.comment = "Field cannot be empty";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

// validators
module.exports = {
	fictionInput,
	searchQuery,
	commentInput
};
