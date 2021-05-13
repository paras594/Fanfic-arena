require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const userRoutes = require("./User/user.routes.js");
const fictionRoutes = require("./Fiction/fiction.routes.js");

const app = express();

//database connection
require("./config/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.use(cors());

app.use(passport.initialize());
require("./config/passport.config.js")(passport);

app.use("/api/users", userRoutes);
app.use("/api/fictions", fictionRoutes);
app.get("/unauthorized", (req, res) => {
	res.json({
		unauthorized: true,
	});
});

app.get("/api/test", (req, res) => {
	console.log(process.env.NAME);
	res.json({ success: true, name: process.env.NAME, dir: __dirname });
});

// app.use((req, res) => {
// 	app.use(express.static(path.join(__dirname, "../client/build/")));
// 	res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
