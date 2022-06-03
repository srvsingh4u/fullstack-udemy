const express = require("express");
const { append } = require("express/lib/response");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("hello its the home page");
});

router.post("/", (req, res) => {
  res.send("its a post requets");
});
router.get("/:id", (req, res) => {
  res.send("the id page");
});

router.get("/:id/edit", (req, res) => {
  res.send("this is the edit page");
});

module.exports = router;
