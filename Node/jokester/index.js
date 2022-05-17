const Jokes = require("give-me-a-joke");
var colors = require("colors");
// console.dir(Jokes);

Jokes.getRandomDadJoke(function (joke) {
  console.log(joke);
  console.log(joke.rainbow);
});
