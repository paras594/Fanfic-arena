const nodemailer = require("nodemailer");
const { GMAIL_ADDRESS, GMAIL_PASS } = process.env;

// enable less secure apps for the mail
const gmailAddress = GMAIL_ADDRESS;
const gmailPass = GMAIL_PASS;

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: gmailAddress,
		pass: gmailPass,
	},
});

module.exports = transporter;
