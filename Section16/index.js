console.log(2 > 3);
console.log(3 < 4);
console.log(4 >= 2);
console.log(5 >= 5);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 != "1");
console.log(1 !== "1");

// document.write("aisghf");

// alert("hy guys wassup");

// const favNum = prompt("what si your fav number");
// console.log(favNum);
// document.write("hy guys ");
const age = 14;

if (age >= 18) {
  console.log("Raj can drink wine");
} else {
  console.log("Raj has to drink water");
}

const star = 2;
if (star === 3) {
  console.log("The guys is a superstar");
} else {
  console.log("The guy is dull in his studies");
}

// const btnchange = document.querySelector("button");

// const change = function () {
//   console.log("clicked");
// };

// btnchange.addEventListener("click", change);
// btnchange.addEventListener("click", console.log("click"));

let rating = 2;
if (rating === 3) {
  console.log("The rating is good");
} else {
  console.log("The rating is not good");
}
const dayOfWeek = "tuesday";
if (dayOfWeek === "Monday") {
  console.log("I hate Monday");
} else if (dayOfWeek === "saturaday") {
  console.log("I love Saturaday");
} else {
  console.log("I love Weekends");
}

const agee = 6;
if (agee < 5) {
  console.log("The entry is free");
} else if (agee < 10) {
  console.log("The entry is $10");
} else if (agee < 65) {
  console.log("The entry is $20");
} else if (agee > 65) {
  console.log("entry is $10");
}

// const week = prompt("Enter the fave daya");

// if (week === "MON") {
//   console.log("ugggg I HATE MONADYS");
// } else if (week === "TUE") {
//   console.log("THE FEELIONG IS SAME BUT NOT LIKE MONDAYS");
// } else if (week === "SAT") {
//   console.log("THE BEST DAY PF THE WEEK ");
// } else {
//   console.log("THE OTHER DAYS ARE EQUALLY BOARING LIKE MONDAYS ");
// }

let random = Math.random();

if (random < 0.5) {
  console.log("The number is greater then 0.5");
} else {
  console.log("THE number is smaller then 0.5");
}
console.log(random);

// const password = prompt("ENTER YOUR PASSWORD");

// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("IT IS AN VALID PASSWORD");
//   } else {
//     console.log("THE PASSWORD CONTAINS SPACE");
//   }
// } else {
//   console.log("THE PASSWORD IS NOT VALID");
// }

// const password = prompt("ENTER YOUR PASSWORD");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("THE PASSWORD IS VALID");
// } else {
//   console.log("THE PASSWORD IS NOT VALID");
// }

const num = 9;
if (num != 8) {
  console.log("The number is not equals to 8");
} else {
  console.log("The number is 8");
}

const day = "tue";

switch (day) {
  case "mon":
    console.log("the days is monday");
    break;
  case "tue":
    console.log("the day is tuesday");
    break;
  case "wed":
    console.log("the day is wednesday");
    break;
  default:
    console.log("its another day");
}
