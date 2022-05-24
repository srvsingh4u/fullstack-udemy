const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(console.log("connected"))
  .catch(() => {
    console.log("oh oh error");
  });

const movieschema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieschema);
const rush = new Movie({ title: "rush", year: 2013, score: 9.2, rating: "A+" });
