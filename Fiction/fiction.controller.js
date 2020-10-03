const fs = require("fs");
const path = require("path");
const User = require("../User/user.schema.js");
const Fiction = require("./fiction.schema.js");
const FictionComment = require("./fictionComment.schema.js");
const validate = require("./validators.js");
const sanitize = require("./sanitizers.js");
const mongoose = require("mongoose");

function createFiction(req, res) {
	// req.body { title, description, category, body }
	// req.file { path, destination, fieldname, mimetype...}
	// req.user
	const sanitizedData = sanitize.fictionInput(req.body);
	const { errors, isValid } = validate.fictionInput(sanitizedData);

	if (!isValid) {
		// delete file if input is invalid
		if (req.file) {
			fs.unlinkSync(req.file.path);
		}

		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors
		});
	}

	let fictionImage;

	if (req.file) {
		fictionImage = "/uploads/" + req.file.filename;
	} else {
		fictionImage = "/images/default-fiction-image.svg";
	}

	// create fiction and save it
	const newFiction = new Fiction({
		userId: req.user._id,
		title: sanitizedData.title,
		description: sanitizedData.description,
		image: fictionImage,
		category: sanitizedData.category,
		body: sanitizedData.body
	});

	newFiction
		.save()
		.then(() => {
			let userFictions = req.user.fictions;
			userFictions.push(newFiction._id);

			User.findOneAndUpdate({ _id: req.user._id }, { fictions: userFictions }, { new: true })
				.then((user) => {
					res.status(201).json({
						message: "Fiction Created"
					});
				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({
						message: "Server Error",
						errors: {
							error: "Failed to add fiction in user"
						}
					});
				});
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({
				message: "Server error",
				errors: {
					error: "Failed to create fiction"
				}
			});
		});
}

function getFictions(req, res) {
	console.log(req.query);
	let sortQuery = req.query.sort ? req.query.sort : {};
	let limitQuery = req.query.limit ? parseInt(req.query.limit) : 0;

	Fiction.find({})
		.sort(sortQuery)
		.limit(limitQuery)
		.populate("userId", { _id: 1, username: 1, fullname: 1, email: 1, userImage: 1 })
		.then((fictions) => {
			return res.status(200).json({
				message: "Fictions data",
				fictions
			});
		})
		.catch((err) => {
			return res.status(400).json({
				message: "Request failed",
				errors: {
					error: err
				}
			});
		});
}

function getOneFiction(req, res) {
	const { fictionId } = req.params;
	const userFields = {
		_id: 1,
		username: 1,
		fullname: 1,
		email: 1,
		userImage: 1
	};

	Fiction.findOne({ _id: fictionId })
		.populate("userId", userFields)
		.populate({
			path: "comments",
			populate: {
				path: "userId",
				select: userFields
			}
		})
		.then((fiction) => {
			res.status(200).json({
				message: "Fiction data",
				fiction
			});
		})
		.catch((err) => {
			res.status(400).json({
				message: "Request failed.",
				errors: {
					error: err
				}
			});
		});
}

function getFictionByCategory(req, res) {
	const { category } = req.params;
	let limitQuery = req.query.limit ? parseInt(req.query.limit) : 0;
	const userFields = {
		_id: 1,
		username: 1,
		fullname: 1,
		email: 1,
		userImage: 1
	};

	Fiction.find({ category })
		.limit(limitQuery)
		.populate("userId", userFields)
		.then((fictions) => {
			res.status(200).json({
				message: `${category} related fictions`,
				fictions
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json({
				message: "Request failed",
				errors: {
					error: err
				}
			});
		});
}

async function getSearchResults(req, res) {
	const { q } = req.query;

	if (!q) {
		return res.status(400).json({
			message: "No query",
			errors: {
				error: "Pass search query with request"
			}
		});
	}

	const sanitizedQuery = sanitize.searchQuery(q);
	const { isValid, errors } = validate.searchQuery(sanitizedQuery);

	if (!isValid) {
		return res.status(400).json({
			message: "Bad request",
			errors
		});
	}

	try {
		console.log("query:", sanitizedQuery);
		const userFields = {
			_id: 1,
			username: 1,
			fullname: 1,
			email: 1,
			userImage: 1
		};
		const results = await Fiction.fuzzySearch(sanitizedQuery)
			.select({ body: 0 })
			.populate("userId", userFields);

		res.status(200).json({
			message: `Search results for ${q}`,
			results
		});
	} catch (err) {
		res.status(400).json({
			message: "Search failed",
			errors: {
				error: err
			}
		});
	}
}

function likeFiction(req, res) {
	// req.user { username, _id }
	// req.params { fictionId }
	const { fictionId } = req.params;
	const userId = req.user._id;

	Fiction.findOneAndUpdate(
		{ _id: fictionId },
		{
			$push: { likes: userId },
			$inc: { likesCount: 1 }
		},
		{ new: true }
	).then((fiction) => {
		return res.json(fiction);
	});
}

function unlikeFiction(req, res) {
	// req.user { username, _id }
	// req.params { fictionId }
	const { fictionId } = req.params;
	const userId = req.user._id;

	Fiction.findOneAndUpdate(
		{ _id: fictionId },
		{
			$pull: { likes: userId },
			$inc: { likesCount: -1 }
		},
		{ new: true }
	).then((fiction) => {
		return res.json(fiction);
	});
}

function addComment(req, res) {
	// req.body = { comment }
	// req.params = { fictionId }
	// req.user = {_id, username}

	const sanitizedData = sanitize.commentInput(req.body);
	const { isValid, errors } = validate.commentInput(sanitizedData);

	if (!isValid) {
		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors
		});
	}

	const body = sanitizedData.comment;
	const userId = req.user._id;
	const { fictionId } = req.params;

	const newComment = new FictionComment({
		userId,
		fictionId,
		body
	});

	newComment.save().then((ficCom) => {
		Fiction.findOneAndUpdate(
			{ _id: fictionId },
			{
				$push: { comments: newComment._id },
				$inc: { commentsCount: 1 }
			},
			{ new: true }
		).then((fic) => {
			FictionComment.populate(newComment, {
				path: "userId",
				select: "_id username fullname email"
			}).then((comment) => {
				res.status(201).json({
					message: "Comment added",
					comment
				});
			});
		});
	});
}

function saveFiction(req, res) {
	// req.params = { fictionId }
	// req.user = {_id, username}
	const { fictionId } = req.params;
	const userId = req.user._id;

	User.findOneAndUpdate(
		{ _id: userId },
		{
			$push: { savedFictions: fictionId }
		},
		{ new: true }
	)
		.then((newFic) => {
			console.log("saved");
			res.status(200).json({
				message: "Saved fiction"
			});
		})
		.catch((err) => {
			res.json({
				message: "Error occured. Failed to save",
				errors: {
					error: err
				}
			});
		});
}

function unsaveFiction(req, res) {
	// req.user {username, _id}
	// req.params { fictionid }

	const { fictionId } = req.params;
	const userId = req.user._id;

	User.findOneAndUpdate(
		{ _id: userId },
		{
			$pull: { savedFictions: fictionId }
		},
		{ new: true }
	)
		.then((newFic) => {
			console.log("unsaved");
			res.status(200).json({
				message: "Removed fiction from saved fictions"
			});
		})
		.catch((err) => {
			res.json({
				message: "Error occured. Failed to remove from saved fictions",
				errors: {
					error: err
				}
			});
		});
}

function deleteFiction(req, res) {
	// req.user { username, _id }
	// req.params { fictionId }

	const { fictionId } = req.params;
	const userId = req.user._id;

	Fiction.findOneAndDelete({ _id: fictionId })
		.then((fic) => {
			User.findOneAndUpdate(
				{ _id: userId },
				{
					$pull: { fictions: fictionId }
				}
			)
				.then(() => {
					res.status(200).json({
						message: "Fiction Deleted Successfully"
					});
				})
				.catch((err) => {
					res.status(500).json({
						message: "Error occurred. Failed to delete fiction.",
						errors: {
							error: err
						}
					});
				});
		})
		.catch((err) => {
			res.status(500).json({
				message: "Error occurred. Failed to delete fiction.",
				errors: {
					error: err
				}
			});
		});
}

function updateFiction(req, res) {
	// req.body { title, description, category, body }
	// req.file { path, destination, fieldname, mimetype...}
	// req.user { username, _id }
	// req.params { fictionId }

	const sanitizedData = sanitize.fictionInput(req.body);
	const { errors, isValid } = validate.fictionInput(sanitizedData);

	if (!isValid) {
		// delete file if input is invalid
		if (req.body.imageChanged && req.file) {
			fs.unlinkSync(req.file.path);
		}

		return res.status(400).json({
			message: "Validation errors",
			inputs: sanitizedData,
			errors
		});
	}

	const { fictionId } = req.params;

	const updatedFic = {
		title: sanitizedData.title,
		description: sanitizedData.description,
		category: sanitizedData.category,
		body: sanitizedData.body
	};

	// this check is required so that previous image is preserved
	// becoz req.body.imageChanged is a string, it is better to check like this
	let imageChanged = req.body.imageChanged === "true";
	let fictionImage;

	if (imageChanged) {
		console.log("i m here to change image");
		if (req.file) {
			fictionImage = "/uploads/" + req.file.filename;
		} else {
			fictionImage = "/images/default-fiction-image.svg";
		}

		updatedFic.image = fictionImage;
	}

	Fiction.findOneAndUpdate({ _id: fictionId }, updatedFic)
		.then(() => {
			res.status(200).json({
				message: "Fiction updated"
			});
		})
		.catch((err) => {
			res.status(400).json({
				message: "Failed to update fiction",
				errors: {
					error: err
				}
			});
		});
}

module.exports = {
	createFiction,
	getFictions,
	getOneFiction,
	getFictionByCategory,
	getSearchResults,
	likeFiction,
	unlikeFiction,
	addComment,
	saveFiction,
	unsaveFiction,
	deleteFiction,
	updateFiction
};
