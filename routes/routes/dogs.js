var express = require("express");
const { append } = require("express/lib/response");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the dogs page");
});
router.get("/name", (req, res) => {
  res.send("the dogs name is murphy ");
});
router.get("/breed", (req, res) => {
  res.send("the dogs breed is german shepard");
});

router.get("/bark", (req, res) => {
  res.send("the dog barking sound is loud and clear ");
});
module.exports = router;
