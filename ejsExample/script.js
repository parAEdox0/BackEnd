
const express = require("express")
const app = express()

//configuring ejs
app.set("view engine", "ejs");
app.use(express.static("./public"))

app.get('/', function (req, res) {
    res.render("index", { name: "parth" })
})

app.get('/contactus', function (req, res) {
    res.render("contactUs")
})

app.get('/404error', function (req, res, next) {
    throw Error("Error 404")
})

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

app.listen(2080)