const mongoose = require("mongoose");

//creates database
mongoose.connect("mongodb://127.0.0.1:27017/database");

//creates document for each module of collection
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

//creates collection mongoose.model(collection name, schema)
module.exports = mongoose.model("user", userSchema);
