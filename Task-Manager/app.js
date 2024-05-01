const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get('/', function (req, res) {
    fs.readdir("./files", (err, files) => {
        if (err) {
            res.send(err);
        }
        res.render("index", { files: files });
    });
});

app.post("/create", function (req, res) {
    fs.writeFile(`./files/${req.body.title.split(" ").join("")}.txt`, req.body.details, (err) => {
        if (err) {
            res.send(err);
        }
        res.redirect('/');
    });
});

app.post("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        if (err) {
            res.send(err);
        }
        console.log(filedata)
        res.render("details", { filename: `${req.params.filename}`, filedata: filedata });
    });
});

app.get("/delete/:filename", function (req, res) {
    fs.rm(`./files/${req.params.filename}`, (err) => {
        if (err) {
            res.send(err);
        }
        res.redirect('/');
    });
});

app.get("/edit/:filename", function (req, res) {
    res.render("edit", { filename: req.params.filename });
});

app.post("/edit", function (req, res) {
    fs.rename(`./files/${req.body.previous_name}`, `./files/${req.body.new_name}`, (err) => {
        if (err) {
            res.send(err);
        }
        res.redirect('/');
    });
});

app.listen(process.env.PORT || 3000)