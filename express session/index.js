const express = require("express");

const app = express();
var session = require("express-session");
const sessionsec = session({
  secret: "secret",
  resave: true,
  saveUninitialized: false,
});
app.use(sessionsec);

app.get("/view", (req, res) => {
  //   req.session.count = count;
  //   const { count } = req.session;
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`You have viewed the page ${req.session.count}`);
});

app.get("/register", (req, res) => {
  const { username = "anonymous" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send(`welcome back ${username}  `);
});

app.listen(3000, () => {
  console.log("listing to the port 3000");
});
