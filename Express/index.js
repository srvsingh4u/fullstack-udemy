const express = require("express");
const app = express();

const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.use((req, res) => {
//   console.log("we made a request");
// }
//   //   res.send("hy hy we got ur response");
//   res.send("<h1>hy this is heading in express js  </h1>");
// });

app.get("/", (req, res) => {
  res.send("This is the HomePage");
});
app.get("/cats", (req, res) => {
  res.send("mewow meow");
});
app.get("/dogs", (req, res) => {
  res.send("bhow bhow");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>hii i m browing the ${subreddit}  </h1>`);
});
app.get("/r/:subreddit/:id", (req, res) => {
  const { subreddit, id } = req.params;
  res.send(
    `<h1>
        this is the ${id} and this is the ${subreddit}
      </h1>`
  );
});
app.get();

app.get("*", (req, res) => {
  res.send("Nothing to select ");
});
app.listen(port, () => {
  console.log(` listening on port ${port}`);
});

// const express = require("express");
// const app = express();

// app.get("/cats", (req, res) => {
//   res.send("hy hy hy ");
// });

// app.listen(3000, () => {
//   console.log("listning to the port");
// });
