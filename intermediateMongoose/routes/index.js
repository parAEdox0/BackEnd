var express = require('express');
var router = express.Router();

const userModel = require("./users")

router.get('/', function (req, res) {
  res.render("index")
})

router.get('/create', async function (req, res) {
  const createdUser = await userModel.create({
    userName: "designDiva",
    nickName: "creativeCoder",
    description: "Creative designer who loves experimenting with CSS animations",
    categories: ["html", "css", "animations"]
  });
  res.send(createdUser)
})


//regular expression RegExp("name to search", "i")
//name to search -> whatever value you want to find
//i -> case insensitive
//^ -> starts with
//$ -> ends with  
router.get('/search', async function (req, res) {
  let regex = new RegExp("^PARAEDOX0$", "i")
  const searchDb = await userModel.find({
    userName: regex
  });
  res.send(searchDb)
})

router.get('/delete', async function (req, res) {
  const deleteDb = await userModel.findOneAndDelete({
    userName: ""
  })
  res.send(deleteDb)
})

module.exports = router;
