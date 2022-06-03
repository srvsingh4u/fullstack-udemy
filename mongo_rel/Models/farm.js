const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipsDB")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("ohh nooo MONGO CONNECTION ERROR");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["spring", "summer", "winter"],
  },
});

const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "product" }],
});

const product = mongoose.model("product", productSchema);
const Farm = mongoose.model("farm", farmSchema);

// const makeProduct = new product({
//   name: "mango",
//   price: 250,
//   season: "spring",
// });
// makeProduct.save();
product.insertMany([
  { name: "mango", price: 2.9, seasong: "summer" },
  { name: "apple", price: 4.9, seasong: "summer" },
  { name: "watermelon", price: 1.9, seasong: "spring" },
]);

// const makeFarm = async () => {
//   const farm = new Farm({
//     name: "Assan Tea garden",
//     city: "shivshagar,Assam",
//   });
//   const mango = await product.findOne({ name: "mango" });
//   farm.products.push(mango);
//   await farm.save();
//   console.log(farm);
// };
// makeFarm();

const makeFarm = async () => {
  const farm = new Farm({
    name: "chnadan tree farm",
    city: "bhopal , mp",
  });
  const apple = await product.findOne({ name: "apple" });
  farm.products.push(apple);
  await farm.save();
  //   console.log(farm);
};
makeFarm();

Farm.findOne({
  name: "chnadan tree farm",
})
  .populate("products")
  .then((farm) => console.log(farm));
