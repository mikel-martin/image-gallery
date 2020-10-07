const express = require("express");
const app = express();

const formidable = require("formidable");
const path = require("path");
const fs = require("fs");

const storage = require("./storage");

const port = 5000;

app.set("view engine", "ejs");

app.use(express.static(storage.uploadsPath));
app.use(express.static(path.join(__dirname, "public")));

// DISPLAY IMAGES
app.get("/", async (req, res) => {
    const entries = fs.readdirSync(storage.uploadsPath, { withFileTypes: true });
    const content = [];
    entries.forEach(function(entry) {
        if(entry.isFile) {
            content.push({ name: entry.name });
        }
    });
    res.render("index", { content });
});

// SAVE POSTED IMAGES
app.post("/", async (req, res) => {
    var form = formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        if(err) res.render("err");
        var readStream = fs.createReadStream(files.imgtoupload.path);
        var writeStream = fs.createWriteStream(storage.uploadsPath + "/" + files.imgtoupload.name);
        readStream.pipe(writeStream);
        readStream.on("end", function() {
            fs.unlinkSync(files.imgtoupload.path);
            res.redirect("/");
        });
    });
    
});

app.use(function(req, res, next) {
    res.render("error");
});

app.listen(port, () => {
    console.log("Server initialized on port " + port);
});