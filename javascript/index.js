var x = 10;
var y = 15;
var result = x + y;
console.log(result);

const birthYear = 1995;
let year = 1994;
year = 1998;
console.log(year);

console.log(birthYear);
var firstName = "Raj";
var lastName = "singh";
var fullName = firstName + " " + lastName;
console.log(fullName);

let str = "Ravi verma";
console.log(str.length);
console.log(str[3]);

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.split("").join(" ").toUpperCase());

// const reverse = function (name) {
//   const chnage = name.split("");

//   const rev = chnage.reverse();
//   const result = rev.join("");
//   return result;
// };
// console.log(reverse("amit"));

let mes = "hi i doing my codes on js";
const mesUpper = mes.toUpperCase();
console.log(mesUpper);

let greet = "     HY Good Morning It was nIce seeing U HERE      ";
console.log(greet.toLowerCase());
console.log(greet.trim());

let phoneNo = "3264289154678";
const re = phoneNo.slice(6);
const resultt = phoneNo.slice(3, 7);
console.log(resultt);
console.log(re);

const laugh = " we should drink 🥃 ";
const replace = laugh.replace("🥃", "🥛");
console.log(replace);

const word = "skateboard";

const facialHair = word.slice(5, 10).replace("o", "e").toUpperCase();
console.log(facialHair);

var fruit = "mango";
let price = "300";
let qty = "4.5";

const fruitStr = `You bought ${qty}kg of ${fruit} at the price of ${price} rs/kg and the toatl price is ${
  qty * price
}`;

console.log(fruitStr);
const random = Math.abs(Math.random() * 6 + 1);
// const remove = Math.trunc(random);
console.log(random);

const number = Math.random() * 5 + 1;
const number2 = Math.floor(number);
console.log(number2);

console.log(Math.pow(3, 5));

const gen = Math.trunc(Math.random() * 10 + 1);
console.log(gen);
