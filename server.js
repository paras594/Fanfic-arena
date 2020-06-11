require("dotenv").config();
const express = require("express");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes.js");

const app = express();

//database connection
require("./config/db.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api/users", usersRoutes);

app.get("/", (req, res) => {
	res.send("server working");
});

const port = 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
