const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");
const user = require("./models/user");
const session = require("express-session");

mongoose
  .connect("mongodb://localhost:27017/loginDemo")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });
app.set("view engine", "ejs");
app.set("views", "views");
app.use(session({ secret: "notagoodsecret" }));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Its is the homepage");
});
app.get("/register", (req, res) => {
  res.render("form");
});
const requireLogin = function (req, res, next) {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};
app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});
app.post("/logout", (req, res) => {
  // req.session.user_id = null;
  req.session.destroy();
  res.redirect("./login");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("logout");
});

app.listen(3000, () => {
  console.log("listing to the port 3000");
});
