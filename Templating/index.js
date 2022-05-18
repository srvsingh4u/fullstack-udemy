const express = require("express");
const app = express();
const redditdata = require("./data.json");
// console.log(redditdata);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const r = Math.floor(Math.random() * 10) + 1;
  res.render("rand", { r: r });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditdata[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("datanot", { subreddit });
  }
});
app.get("/cats", (req, res) => {
  const cats = ["blue", "green", "willy", "winston", "rose"];

  res.render("cats", { allcats: cats });
});
app.listen(3000, () => {
  console.log("listing on port 3000");
});
