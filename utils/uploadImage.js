const multer = require("multer");
const path = require("path");

function sanitizeFile(file, cb) {
   // Define the allowed extension
   let fileExts = [".png", ".jpg", ".jpeg", ".gif"];
   // Check allowed extensions
   let isAllowedExt = fileExts.includes(path.extname(file.originalname.toLowerCase()));

   // Mime type must be an image
   let isAllowedMimeType = file.mimetype.startsWith("image/");
   if (isAllowedExt && isAllowedMimeType) {
      return cb(null, true); // no errors
   } else {
      // pass error msg to callback, which can be displaye in frontend
      cb("Error: File type not allowed!");
   }
}

const storage = multer.diskStorage({
   destination: path.join(__dirname, "../public", "uploads"),
   filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
   }
});

const uploadImage = multer({
   storage: storage,
   limit: { fileSize: 5000000 }, // 5mb
   fileFilter: (req, file, cb) => {
      sanitizeFile(file, cb);
   }
});

module.exports = uploadImage;
