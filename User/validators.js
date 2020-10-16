const Validator = require("validator");
const isEmpty = require("is-empty");

const loginInput = (data) => {
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";

	// email checks
	if (Validator.isEmpty(data.email)) {
		errors.email = "email field is required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "email is invalid";
	}

	// password checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "password field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const registerInput = (data) => {
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.username = !isEmpty(data.username) ? data.username : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";

	// username check
	if (Validator.isEmpty(data.username)) {
		errors.username = "Username field is required";
	} else if (!Validator.isAlphanumeric(data.username)) {
		errors.username = "Invalid username";
	}

	// email checks
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// password checks
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}

	if (Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password field is required";
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = "Password must be at least 6 characters";
	}

	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords must match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const resetPassInput = (data) => {
	// data = { resetId, password, password2 }
	let errors = {};

	data.resetId = !isEmpty(data.resetId) ? data.resetId : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";

	if (Validator.isEmpty(data.resetId)) {
		errors.resetId = "Reset ID is not available";
	}

	if (Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}

	if (Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm password field is required";
	}

	if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
		errors.password = "Password must be at least 6 characters";
	}

	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords must match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const editProfileInput = (data) => {
	// data = { username, email, fullname }
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.username = !isEmpty(data.username) ? data.username : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.fullname = !isEmpty(data.fullname) ? data.fullname : "";

	// username check
	if (Validator.isEmpty(data.username)) {
		errors.username = "Username field is required";
	} else if (!Validator.isAlphanumeric(data.username)) {
		errors.username = "Invalid username";
	}

	// email checks
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	} else if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// fullname checks
	if (Validator.isEmpty(data.fullname)) {
		errors.fullname = "Full Name field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const updatePasswordInput = (data) => {
	// data = { currentPassword, newPassword, newPassword2}
	let errors = {};

	// convert empty fields to an empty string so we can use validator functions
	data.currentPassword = !isEmpty(data.currentPassword) ? data.currentPassword : "";
	data.newPassword = !isEmpty(data.newPassword) ? data.newPassword : "";
	data.newPassword2 = !isEmpty(data.newPassword2) ? data.newPassword2 : "";

	// currentPassword checks
	if (Validator.isEmpty(data.currentPassword)) {
		errors.currentPassword = "Current password field is required";
	}

	if (Validator.isEmpty(data.newPassword)) {
		errors.newPassword = "New password field is required";
	}

	if (Validator.isEmpty(data.newPassword2)) {
		errors.newPassword2 = "Confirm Password field is required";
	}

	if (!Validator.isLength(data.newPassword, { min: 6, max: 30 })) {
		errors.newPassword = "Password must be at least 6 characters";
	}

	if (!Validator.equals(data.newPassword, data.newPassword2)) {
		errors.newPassword2 = "Passwords must match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

// user validators
module.exports = {
	loginInput,
	registerInput,
	resetPassInput,
	editProfileInput,
	updatePasswordInput
};
