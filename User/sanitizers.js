const Validator = require("validator");

const loginInput = (data) => {
	// data = { email, password }
	let { email, password } = data;

	email = Validator.trim(email);
	email = Validator.normalizeEmail(email);

	return { email, password };
};

const registerInput = (data) => {
	// data = { username, email, password, password2 }
	let { username, email, password, password2 } = data;

	username = Validator.trim(username);
	email = Validator.trim(email);
	email = Validator.normalizeEmail(email);

	return { username, email, password, password2 };
};

const editProfileInput = (data) => {
	let { username, email, fullname } = data;

	username = Validator.trim(username);
	email = Validator.trim(email);
	email = Validator.normalizeEmail(email);
	fullname = Validator.trim(fullname);

	return { username, email, fullname };
};

// user sanitizers
module.exports = {
	loginInput,
	registerInput,
	editProfileInput
};
