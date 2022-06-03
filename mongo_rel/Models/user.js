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

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresss: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const user = mongoose.model("user", userSchema);

const makeUser = async () => {
  const u = new user({
    first: "ravi",
    last: "verma",
  });
  u.addresss.push({
    name: "ravi",
    city: "kolkota",
    state: "bengal",
    country: "India",
  });
  await u.save();
};

const newaddress = async (id) => {
  const n = await user.findById(id);
  n.addresss.push({
    street: "Boaring Road ",
    city: "patna",
    state: "Bihar",
    country: "India",
  });
  await n.save();
};

newaddress("62906a5281ba3d777d7047d2");
