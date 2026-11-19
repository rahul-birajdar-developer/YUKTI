
import multer from "multer";
import path from "path";
import crypto from "crypto";

// Configure how Multer will store uploaded files
const storage = multer.diskStorage({

    // Specify the folder where uploaded files will be saved
    destination: function (req, file, cb) {
        cb(null, "./public");
    },

    // Generate a unique filename for every uploaded file
    filename: function (req, file, cb) {

        // Generate a random string to prevent filename conflicts
        const uniqueName = crypto.randomBytes(16).toString("hex");

        // Extract the original file extension (e.g. .jpg, .png)
        const fileExtension = path.extname(file.originalname);

        // Set the final filename
        cb(null, uniqueName + fileExtension);
    }
});

// Create Multer upload middleware
const upload = multer({
    storage,

    // Set upload restrictions
    limits: {
        fileSize: 2 * 1024 * 1024, // Maximum file size: 2 MB
    }
});

// Export middleware so it can be used in routes
export default upload;
