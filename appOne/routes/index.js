var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function (req, res) {
  res.render("index")
})

router.get('/create', async function (req, res) {
  const createdUsers = await userModel.create({
    username: "eraser head",
    name: "aizawa",
    age: 43
  })
  res.send(createdUsers)
})

router.get('/find', async function (req, res) {
  const searched = await userModel.find({
    username: "deku"
  });
  // const oneUser = await userModel.find({
  //   username: "paraedox0"
  // })
  res.send(searched)
  // res.send(oneUser)
})

router.get('/delete', async function (req, res) {
  const deletedUser = await userModel.findOneAndDelete({
    username: "paraedox0"
  })
  res.send(deletedUser)
})

module.exports = router;
