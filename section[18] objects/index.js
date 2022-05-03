const newobj = {
  firstName: "raj",
  lastName: "singh",
  birth: 1994,
  address: "nagpur",
};

console.log(newobj.firstName.toUpperCase());
console.log(newobj.address.toUpperCase());

const person = {
  firstName: "ravi",
  lastName: "singh",
  twitter: "iamravi",
  facebook: "ravisingh",
  instagram: "ravi_",
  zipCode: 1267838971,
  address: "New Town Raipur",
};

console.log(person.address);

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};

//YOUR CODE GOES DOWN HERE:
const fullAddress =
  restaurant["address"] +
  " " +
  restaurant["city"] +
  " " +
  restaurant["state"] +
  " " +
  restaurant["zipcode"];

console.log(fullAddress);
