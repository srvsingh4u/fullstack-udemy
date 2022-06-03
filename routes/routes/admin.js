const express = require("express");
var router = express.Router();

router.use((req, res, next) => {
  if (req.query.isday) {
    next();
  }
  res.send("u are not admin");
});

router.get("/sec", (req, res) => {
  res.send("welcome to top gun guys");
});

router.get("/mav", (req, res) => {
  res.send("The Top Gun instrictor is Mavrick");
});

module.exports = router;
