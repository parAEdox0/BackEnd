
const express = require("express")
const app = express()

//configuring ejs
app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("index", { name: "parth" })
})

app.get('/contactus', function (req, res) {
    res.render("contactUs")
})

app.listen(2080)