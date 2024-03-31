const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/database");

const userSchema = mongoose.Schema({
  userName: String,
  nickName: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },
  dateCreated: {
    type: Date,
    default: Date.now()
  }

});

module.exports = mongoose.model("users", userSchema)