const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

app.use((req, res, next) => {
  console.log("this is my first middleware");
  next();
});
app.use((req, res, next) => {
  console.log("this is my second middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("hello its working ");
});
app.get("/dogs", (req, res) => {
  res.send("hy hy hy ");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
