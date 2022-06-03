const express = require("express");
const { status } = require("express/lib/response");
const app = express();
const morgan = require("morgan");
const apperror = require("./apperror");
app.use(morgan("tiny"));

// app.use((req, res, next) => {
//   console.log("this is my first middleware");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("this is my second middleware");
//   next();
// });

app.get("/", (req, res) => {
  res.send("hello its working ");
});
app.get("/dogs", (req, res) => {
  res.send("hy hy hy ");
});
app.get("/error", (req, res) => {
  fly.chichken();
});
app.get("/admin", (res, req) => {
  throw new apperror("you are not admin", 403);
});
app.use((err, req, res, next) => {
  // console.log("*************************");
  // console.log("************ERROR*************");
  // console.log("*************************");
  const { status = 500, message = "something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
