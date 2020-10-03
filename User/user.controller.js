const fs = require("fs");
const User = require("./user.schema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("./validators.js");
const sanitize = require("./sanitizers.js");

function registerUser(req, res) {
	const sanitizedData = sanitize.registerInput(req.body);
	console.log(sanitizedData);
	const { errors, isValid } = validate.registerInput(sanitizedData);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors
		});
	}

	User.findOne({ email: sanitizedData.email }).then((user) => {
		if (user) {
			return res.status(400).json({
				message: "Email already exists",
				errors: {
					email: "Email already exists",
					inputs: sanitizedData
				}
			});
		}

		const newUser = new User({
			username: sanitizedData.username,
			email: sanitizedData.email,
			password: sanitizedData.password
		});

		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUser.password, salt, (err, hash) => {
				if (err) throw err;
				newUser.password = hash;
				newUser
					.save()
					.then(() => {
						res.status(201).json({
							message: "User registered"
						});
					})
					.catch((err) => {
						res.status(500).json({
							message: "Server error occured.",
							errors: {
								error: err
							}
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
			errors
		});
	}

	User.findOne({ email: sanitizedData.email }).then((user) => {
		if (!user) {
			return res.status(404).json({
				message: "User not found",
				errors: {
					error: "User not found"
				}
			});
		}

		bcrypt.compare(sanitizedData.password, user.password).then((isMatch) => {
			if (!isMatch) {
				return res.status(400).json({
					message: "Login failed",
					errors: {
						error: "Login failed"
					}
				});
			}

			const payload = {
				id: user._id,
				username: user.username,
				email: user.email,
				fullname: user.fullname,
				joinedAt: user.joinedAt
			};

			jwt.sign(
				payload,
				"secret",
				{
					expiresIn: 31556926
				},
				(err, token) => {
					res.json({
						message: "Login successful",
						token: `Bearer ${token}`
					});
				}
			);
		});
	});
}

function getUser(req, res) {
	User.findOne({ _id: req.params.userId }, { password: 0 })
		.populate("fictions")
		.populate("likedFictions")
		.populate("savedFictions")
		.populate("followers")
		.populate("following")
		.then((user) => {
			if (!user) {
				return res.status(400).json({
					message: "Bad Request",
					errors: {
						error: "User does not exist"
					}
				});
			}

			return res.status(200).json({
				message: "User data",
				user
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Failed to get user",
				errors: {
					error: err
				}
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
			errors
		});
	}

	let userProfileImg;

	if (req.file) {
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
				user
			});
		})
		.catch((err) => {
			res.status(400).json({
				message: "Failed to update user",
				errors: {
					error: err
				}
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
			errors
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
						currentPassword: "Password didn't match"
					}
				});
			}

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newPassword, salt, (err, hash) => {
					if (err) {
						return res.status(500).json({
							message: "Server error occured",
							errors: {
								error: "Server error occured. Try again later."
							}
						});
					}

					User.findOneAndUpdate({ _id: user._id }, { password: hash })
						.then(() => {
							return res.status(200).json({
								message: "Password updated"
							});
						})
						.catch((err) => {
							return res.status(400).json({
								message: "Failed to update password",
								errors: {
									error: err
								}
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
			unauthorized: true
		});
	}

	User.findOne({ _id: req.params.userId }, { savedFictions: 1 })
		.populate(populateSavedFic)
		.then((user) => {
			if (!user) {
				return res.status(400).json({
					message: "Bad Request",
					errors: {
						error: "User does not exist"
					}
				});
			}

			return res.status(200).json({
				message: "Saved Fictions",
				savedFictions: user.savedFictions
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Failed to get user",
				errors: {
					error: err
				}
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
			message: "Trying to follow yourself ?!"
		});
	}

	try {
		const user = await User.findOne({ _id: userToFollow, followers: follower });
		if (user) {
			return res.json({
				message: "Already following"
			});
		}

		// add to followers of userToFollow
		await User.findOneAndUpdate(
			{ _id: userToFollow },
			{
				$push: { followers: follower }
			}
		);

		// add to following of follower
		await User.findOneAndUpdate(
			{ _id: follower },
			{
				$push: { following: userToFollow }
			}
		);

		res.json({
			message: "Started following"
		});
	} catch (err) {
		res.json({
			error: err
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
			message: "Trying to unfollow yourself ?!"
		});
	}

	try {
		// check if current user is in the followers of the user.
		const user = await User.findOne({ _id: userToUnfollow, followers: follower });
		// if not in followers, that means not following
		if (!user) {
			return res.json({
				message: "Already not following"
			});
		}

		// remove current user from followers of user
		await User.findOneAndUpdate(
			{ _id: userToUnfollow },
			{
				$pull: { followers: follower }
			}
		);

		// remove user from following of current user
		await User.findOneAndUpdate(
			{ _id: follower },
			{
				$pull: { following: userToUnfollow }
			}
		);

		res.status(200).json({
			message: "Unfollowed the user"
		});
	} catch (err) {
		res.json({
			error: err
		});
	}
}

module.exports = {
	registerUser,
	loginUser,
	getUser,
	updateUserProfile,
	updateUserPassword,
	getSavedFictions,
	followUser,
	unfollowUser
};
