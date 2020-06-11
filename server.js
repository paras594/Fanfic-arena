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

app.get("/api/test", (req, res) => {
	console.log(process.env.NAME);
	res.json({ success: true });
});

const port = 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
