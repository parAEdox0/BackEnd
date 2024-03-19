let express = require("express")
let app = express()


//creating a slash route 
app.get('/', function (req, res) {
    res.send("You are on slash route")
})

app.listen(3000)

//creating a profile route
app.get('/profile', function (req, res) {
    res.send("You are on profile route")
})

//now dynamically creating a /username route for any user
app.get('/profile/:username', function (req, res) {
    res.send(`Hello ${req.params.username}`)
})

//here usename is a dynamic value which will based on what user inputs and it will be stored in req.params and to access we have to user req.params.[variable name by which you set the dynamic value]