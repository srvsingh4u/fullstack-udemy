const express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to the ipl");
});

router.get("/mi", (req, res) => {
  res.send("welcome to mi team");
});

router.get("/mi/rohit", (req, res) => {
  res.send("Rohit is the captain of mumbai indian");
});
module.exports = router;
