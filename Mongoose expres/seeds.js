const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("mongo connection open");
  })
  .catch((err) => {
    console.log("ohhh hooo mongo connection error");
  });

// const p = new Product({
//   name: "mango",
//   price: 1.99,
//   category: "fruit",
// });
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy",
  },
];

Product.insertMany(seedProducts)
  .then((p) => {
    console.log(p);
  })
  .catch(() => {
    console.log(e);
  });
