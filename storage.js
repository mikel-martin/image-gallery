const dotenv = require("dotenv");
dotenv.config();

const uploadsPath = process.env.UPLOADS;

if(!uploadsPath) {
    console.error("Uploads path not defined.",
        "Set a path to the UPLOADS environment variable.");
    process.exit(1);
}

exports.uploadsPath = uploadsPath;