require("../config/db.js");
const bcrypt = require("bcryptjs");
const faker = require("faker");
const mongoose = require("mongoose");
const User = require("../User/user.schema.js");
const Fiction = require("../Fiction/fiction.schema.js");

function createUser() {
	let newUser = new User({
		username: "Chandu",
		email: "chandu@gmail.com",
		password: "password",
		fullname: "chandu prasad"
	});

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			newUser.password = hash;
			newUser.save().then(() => console.log("user created"));
		});
	});
}

function testFaker() {
	const result = faker.name.title();

	console.log(result);
}

async function generateFictions() {
	const categories = [
		{ name: "Anime/Manga" },
		{ name: "Books" },
		{ name: "Games" },
		{ name: "Movies" },
		{ name: "TV" },
		{ name: "Comics" },
		{ name: "Cartoons" },
		{ name: "Plays" },
		{ name: "Crossovers" },
		{ name: "Misc" }
	];
	const users = await User.find({});

	users.forEach((user) => {
		let ficIds = user.fictions;
		let fictions = [];
		for (let i = 0; i < 10; i++) {
			let index = Math.floor(Math.random() * categories.length);
			let newFic = {
				_id: mongoose.Types.ObjectId(),
				userId: user._id,
				title: faker.lorem.words(),
				description: faker.lorem.paragraph(),
				category: categories[index].name,
				body: faker.lorem.paragraphs()
			};

			ficIds.push(newFic._id);
			fictions.push(newFic);
		}

		User.findOneAndUpdate({ _id: user._id }, { fictions: ficIds }, { new: true }).then((user) => {
			console.log(user);
		});
		Fiction.insertMany(fictions);
	});
}

function populatedResult() {
	let userId = "5f36522ec5a8323db99e39ce";

	User.findOne({ _id: userId })
		.populate("fictions")
		.then((result) => {
			console.log(result);
		});
}

// populatedResult();
generateFictions();
// testFaker();
// createUser();
