const express = require("express");

const app = express();
var cookieParser = require("cookie-parser");
app.use(cookieParser());

// const shelterRoutes = require("./routes/shelter");

// const dogsRoute = require("./routes/dogs");
// const playerRoute = require("./routes/players");
// const adminRoute = require("./routes/admin");
// app.use("/shelter", shelterRoutes);
// // app.get("/", (req, res) => {
// //   res.send("hy hy hy  hy ");
// // });

// app.use("/dogs", dogsRoute);

// app.use("/ipl", playerRoute);
// app.use("/", adminRoute);

app.get("/app", (req, res) => {
  const { plane } = req.cookies;
  res.send(`hy this is the home page ${plane}`);

  console.log(req.cookies);
});

app.get("/new", (req, res) => {
  res.cookie("name", "Mavrick");
  res.cookie("plane", "Dassault Rafale");
  res.send("this is ghost of kiav");
  console.log(req.cookies);
});

app.listen(3000, () => {
  console.log("listing at the port 3000");
});
