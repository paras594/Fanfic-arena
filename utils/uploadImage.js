const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");

function sanitizeFile(file, cb) {
	// Define the allowed extension
	let fileExts = [".png", ".jpg", ".jpeg"];
	// Check allowed extensions
	let isAllowedExt = fileExts.includes(
		path.extname(file.originalname.toLowerCase())
	);

	// Mime type must be an image
	let isAllowedMimeType = file.mimetype.startsWith("image/");
	if (isAllowedExt && isAllowedMimeType) {
		return cb(null, true); // no errors
	} else {
		// pass error msg to callback, which can be displaye in frontend
		cb("Error: File type not allowed!");
	}
}

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

// const storage = multer.diskStorage({
// 	destination: path.join(__dirname, "../public", "uploads"),
// 	filename: (req, file, cb) => {
// 		cb(null, Date.now() + "-" + file.originalname);
// 	},
// });

const storage = new CloudinaryStorage({
	cloudinary: cloudinary,
	folder: "fanfic-arena",
	allowedFormats: ["jpg", "png", "jpeg"],
});

const uploadImage = multer({
	storage: storage,
	limit: { fileSize: 2500000 }, // 2.5mb
	fileFilter: (req, file, cb) => {
		sanitizeFile(file, cb);
	},
});

module.exports = uploadImage;
