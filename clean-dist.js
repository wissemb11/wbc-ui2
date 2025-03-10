const fs = require("fs");
const path = require("path");

const distFolder = path.join(__dirname, "dist");

// Define folders to delete
const foldersToDelete = ["media", "img", "video","pdf"];

// Define file extensions to delete
const unwantedExtensions = [".pdf", ".doc", ".docx", ".xls", ".xlsx", ".mp3", ".mp4", ".gif", ".jpg", ".jpeg", ".png", ".map"];
const filesToDelete = ["index.html"]; // Remove only if not needed

// Function to delete folders
function deleteFolder(folderPath) {
    if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
        console.log(`Deleted folder: ${folderPath}`);
    }
}

// Function to delete unwanted files recursively
function cleanDist(dir) {
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (foldersToDelete.includes(file)) {
                deleteFolder(filePath); // Delete the whole folder
            } else {
                cleanDist(filePath); // Recursively check subfolders
            }
        } else if (unwantedExtensions.includes(path.extname(file) || filesToDelete.includes(file))) {
            fs.unlinkSync(filePath); // Delete the file
            console.log(`Deleted: ${filePath}`);
        }
    });
}

// Run cleanup
cleanDist(distFolder);
