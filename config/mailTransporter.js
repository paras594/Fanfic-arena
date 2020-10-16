const nodemailer = require("nodemailer");

// enable less secure apps for the mail
const gmailAddress = "usewastebin@gmail.com";
const gmailPass = "waste594bingmailpwd";

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: gmailAddress,
		pass: gmailPass
	}
});

module.exports = transporter;
