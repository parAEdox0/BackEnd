//example of using express.js to create a server environment
//to install express.js 
//npm install express

const express = require('express')
const app = express()

//middleware

app.use(function (res, req, next) {
    console.log("Middleware posted HI");
    next();
})

// '/' is a slash route which is a default route for any website

app.get('/', function (req, res) {
    res.send("You are on slash route")
    console.log("you're on slash route")
})

//creating another route /profile on the same port 300

app.get('/profile', function (req, res) {
    res.send("You're on profile route")
    console.log("You're on profile route")
})

app.listen(3000)