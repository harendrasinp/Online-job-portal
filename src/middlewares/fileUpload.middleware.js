// Importing the multer library to handle file uploads
import multer from "multer";

// Configuring storage options for multer
const storage = multer.diskStorage({
    // Setting the destination folder where uploaded files will be stored
    destination: (req, file, cb) => {
        cb(null, "public/resumePDF"); // Specifies the folder path for storing resumes
    },
    // Setting the filename for each uploaded file
    filename: (req, file, cb) => {
        // Creates a unique filename by prepending the current timestamp to the original file name
        const fileName = Date.now() + "-" + file.originalname;
        cb(null, fileName); // Saves the file with the generated unique name
    }
});

// Creating an upload middleware with the defined storage configuration
export const upload = multer({
    storage: storage  // Assigns the storage configuration to multer
});
