const fs = require("fs");
const User = require("./user.schema.js");
const ResetQuery = require("./resetQueries.schema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/mailTransporter.js");
const { v4: uuid } = require("uuid");
const validate = require("./validators.js");
const sanitize = require("./sanitizers.js");
const moment = require("moment");

function registerUser(req, res) {
	const sanitizedData = sanitize.registerInput(req.body);
	console.log(sanitizedData);
	const { errors, isValid } = validate.registerInput(sanitizedData);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors,
		});
	}

	User.findOne({ email: sanitizedData.email }).then((user) => {
		if (user) {
			return res.status(400).json({
				message: "Email already exists",
				errors: {
					email: "Email already exists",
					inputs: sanitizedData,
				},
			});
		}

		const newUser = new User({
			username: sanitizedData.username,
			email: sanitizedData.email,
			password: sanitizedData.password,
		});

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then(() => {
						res.status(201).json({
							message: "User registered",
						});
					})
					.catch((err) => {
						res.status(500).json({
							message: "Server error occured.",
							errors: {
								error: err,
							},
						});
					});
			});
		});
	});
}

function loginUser(req, res) {
	const sanitizedData = sanitize.loginInput(req.body);
	const { isValid, errors } = validate.loginInput(sanitizedData);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors,
		});
	}

	User.findOne({ email: sanitizedData.email }).then((user) => {
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				errors: {
					error: "User not found",
				},
			});
		}

		bcrypt.compare(sanitizedData.password, user.password).then((isMatch) => {
			if (!isMatch) {
				return res.status(400).json({
					message: "Login failed",
					errors: {
						error: "Login failed",
					},
				});
			}

			const payload = {
				id: user._id,
				username: user.username,
				email: user.email,
				fullname: user.fullname,
				joinedAt: user.joinedAt,
				userImage: user.userImage,
			};

			jwt.sign(
				payload,
				"secret",
				{
					expiresIn: 31556926,
				},
				(err, token) => {
					res.json({
						message: "Login successful",
						token: `Bearer ${token}`,
					});
				}
			);
		});
	});
}

async function forgotPassword(req, res) {
	const { email } = req.body;
	console.log(email);

	try {
		// check if email exists
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({
				message: "Request failed.",
				errors: {
					error: "Email not found.",
				},
			});
		}

		// create reset id and request
		const uniqueId = uuid();

		// save the request in database
		const request = new ResetQuery({
			id: uniqueId,
			email,
		});

		await request.save();

		// send mail
		const info = await transporter.sendMail({
			from: "Fanfic Arena",
			to: email,
			subject: "Reset Your Fanfic Arena Password",
			text: `To reset your password, click on the following link: http://localhost:3000/reset/${uniqueId}`,
		});

		console.log(info.response);

		return res.status(200).json({
			message: "Email sent to " + email,
		});
	} catch (err) {
		res.status(400).json({
			message: "Request failed.",
			errors: {
				error: err,
			},
		});
	}
}

async function resetPassword(req, res) {
	// req.body = {resetId, password, password2}
	const { errors, isValid } = validate.resetPassInput(req.body);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: req.body,
			errors,
		});
	}

	try {
		// check if request exists
		const resetRequest = await ResetQuery.findOne({ id: req.body.resetId });

		if (!resetRequest) {
			return res.status(400).json({
				message: "Request failed.",
				errors: {
					error: "Reset query not found.",
				},
			});
		}

		// check for expiry of reset query
		const expiryDate = moment(resetRequest.date).add(1, "days");
		const isValid = moment().isBefore(expiryDate);

		if (!isValid) {
			// delete the query
			await ResetQuery.findOneAndDelete({ id: req.body.resetId });

			return res.status(400).json({
				message: "Reset Request Timeout.",
				errors: {
					error: "Your reset password period has expired. Make a new reset password request.",
				},
			});
		}

		// reset password
		const user = await User.findOne({ email: resetRequest.email });

		// hash password and update it in db
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(req.body.password, salt, async (err, hash) => {
				if (err) {
					return res.status(400).json({
						success: false,
						message: "Some error occured.",
						errors: {
							error: err,
						},
					});
				}

				const hashedPassword = hash;

				await User.findOneAndUpdate(
					{ _id: user._id },
					{ password: hashedPassword }
				);

				return res.status(200).json({
					message: "Password updated.",
				});
			});
		});
	} catch (err) {
		res.json({
			message: "Request failed.",
			errors: {
				error: err,
			},
		});
	}
}

function getUser(req, res) {
	User.findOne({ _id: req.params.userId }, { password: 0 })
		.populate("fictions")
		.populate("likedFictions")
		.populate("savedFictions")
		.populate("followers")
		.populate("following")
		.then((user) => {
			console.log({ user });
			if (!user) {
				return res.status(400).json({
					message: "Bad Request",
					errors: {
						error: "User does not exist",
					},
				});
			}

			return res.status(200).json({
				message: "User data",
				user,
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Failed to get user",
				errors: {
					error: err,
				},
			});
		});
}

function updateUserProfile(req, res) {
	// req.body = { username, fullname, email }
	// req.file = { path, destination, fieldname, mimetype...}
	// req.user = { userData }

	const sanitizedData = sanitize.editProfileInput(req.body);
	const { errors, isValid } = validate.editProfileInput(sanitizedData);

	if (!isValid) {
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}

		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors,
		});
	}

	let userProfileImg;

	if (req.file) {
		console.log({ filename: req.file.filename });
		userProfileImg = "/uploads/" + req.file.filename;
	} else {
		userProfileImg = req.user.userImage;
	}

	const updatedUser = req.user;
	updatedUser.username = sanitizedData.username;
	updatedUser.email = sanitizedData.email;
	updatedUser.fullname = sanitizedData.fullname;
	updatedUser.userImage = userProfileImg;

	User.findOneAndUpdate({ _id: updatedUser._id }, updatedUser, { new: true })
		.then((user) => {
			res.status(200).json({
				message: "User updated",
				user,
			});
		})
		.catch((err) => {
			res.status(400).json({
				message: "Failed to update user",
				errors: {
					error: err,
				},
			});
		});
}

function updateUserPassword(req, res) {
	// req.body = { currentPassword, newPassword, newPassword2}
	// req.user = { user details }
	const { errors, isValid } = validate.updatePasswordInput(req.body);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: req.body,
			errors,
		});
	}

	// 	match currentPasswords
	// 		if !match
	// 			return password didn't match
	// 		else
	// 			find that user and update its password

	const { currentPassword, newPassword } = req.body;

	User.findOne({ _id: req.user._id }).then((user) => {
		// res.json(user);

		bcrypt.compare(currentPassword, user.password).then((isMatch) => {
			if (!isMatch) {
				return res.status(400).json({
					message: "Wrong Password",
					errors: {
						currentPassword: "Password didn't match",
					},
				});
			}

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newPassword, salt, (err, hash) => {
					if (err) {
						return res.status(500).json({
							message: "Server error occured",
							errors: {
								error: "Server error occured. Try again later.",
							},
						});
					}

					User.findOneAndUpdate({ _id: user._id }, { password: hash })
						.then(() => {
							return res.status(200).json({
								message: "Password updated",
							});
						})
						.catch((err) => {
							return res.status(400).json({
								message: "Failed to update password",
								errors: {
									error: err,
								},
							});
						});
				});
			});
		});
	});
}

function getSavedFictions(req, res) {
	const populateSavedFic = parseInt(req.query.populate) ? "savedFictions" : "";

	console.log(req.params.userId, req.user._id);

	if (req.params.userId != req.user._id) {
		return res.json({
			unauthorized: true,
		});
	}

	User.findOne({ _id: req.params.userId }, { savedFictions: 1 })
		.populate(populateSavedFic)
		.then((user) => {
			if (!user) {
				return res.status(400).json({
					message: "Bad Request",
					errors: {
						error: "User does not exist",
					},
				});
			}

			return res.status(200).json({
				message: "Saved Fictions",
				savedFictions: user.savedFictions,
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Failed to get user",
				errors: {
					error: err,
				},
			});
		});
}

async function followUser(req, res) {
	// req.user = { username, _id }
	// req.params = { userId }
	const follower = req.user._id;
	const userToFollow = req.params.userId;

	if (follower === req.params.userId) {
		return res.json({
			message: "Trying to follow yourself ?!",
		});
	}

	try {
		const user = await User.findOne({
			_id: userToFollow,
			followers: follower,
		});
		if (user) {
			return res.json({
				message: "Already following",
			});
		}

		// add to followers of userToFollow
		await User.findOneAndUpdate(
			{ _id: userToFollow },
			{
				$push: { followers: follower },
			}
		);

		// add to following of follower
		await User.findOneAndUpdate(
			{ _id: follower },
			{
				$push: { following: userToFollow },
			}
		);

		res.json({
			message: "Started following",
		});
	} catch (err) {
		res.json({
			error: err,
		});
	}
}

async function unfollowUser(req, res) {
	// loggedIn user is current user
	// req.user = { username, _id }
	// req.params = { userId }

	const follower = req.user._id;
	const userToUnfollow = req.params.userId;

	if (follower === req.params.userId) {
		return res.json({
			message: "Trying to unfollow yourself ?!",
		});
	}

	try {
		// check if current user is in the followers of the user.
		const user = await User.findOne({
			_id: userToUnfollow,
			followers: follower,
		});
		// if not in followers, that means not following
		if (!user) {
			return res.json({
				message: "Already not following",
			});
		}

		// remove current user from followers of user
		await User.findOneAndUpdate(
			{ _id: userToUnfollow },
			{
				$pull: { followers: follower },
			}
		);

		// remove user from following of current user
		await User.findOneAndUpdate(
			{ _id: follower },
			{
				$pull: { following: userToUnfollow },
			}
		);

		res.status(200).json({
			message: "Unfollowed the user",
		});
	} catch (err) {
		res.json({
			error: err,
		});
	}
}

function getConnections(req, res) {
	// req.user = { username, _id }
	// req.params = { userId }
	const { userId } = req.params;

	const includeFields = {
		username: 1,
		email: 1,
		fullname: 1,
		joinedAt: 1,
		userImage: 1,
		following: 1,
		followers: 1,
	};

	User.findOne({ _id: userId })
		.select(includeFields)
		.populate("followers", {
			username: 1,
			email: 1,
			joinedAt: 1,
			userImage: 1,
			fullname: 1,
		})
		.populate("following", {
			username: 1,
			email: 1,
			joinedAt: 1,
			userImage: 1,
			fullname: 1,
		})
		.then((user) => {
			res.status(200).json({
				message: "User with followers and following data",
				user,
			});
		})
		.catch((err) => {
			res.status(400).json({
				message: "Request Failed",
				errors: {
					error: err,
				},
			});
		});
}

module.exports = {
	registerUser,
	loginUser,
	forgotPassword,
	resetPassword,
	getUser,
	updateUserProfile,
	updateUserPassword,
	getSavedFictions,
	followUser,
	unfollowUser,
	getConnections,
};
