// console.log("---For---------loops----------");

// for (let i = 1; i <= 10; i++) {
//   console.log(`This is the ${i} loop statment`);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log("I am n the loop ");
//   console.log(`${i}`);
// }

// console.log("------EVEN NUMBERS------");

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(`${i}`);
//   }
// }
// console.log("========simple method====");
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// console.log("----- decrement-----");

// for (let i = 100; i >= 10; i -= 10) {
//   console.log(i);
// }

// console.log("----exrecise-----");
// for (let i = 25; i >= 0; i -= 5) {
//   console.log(i);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// // for (const ar of people) {
// //   console.log(ar);
// // }

// for (let i = 1; i <= 4; i++) {
//   console.log(`i is ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(`  ${i}:  j is ${j}`);
//   }
// }
// console.log("-----Nested Loop-----");
// const chart = [
//   ["amit", "raj", "riya"],
//   ["shivam", "abhi", "dhoni", " miller"],
//   ["avesh", "siraj", "thakur", "rinku"],
//   ["moin", "babar azam", "virat", "ab"],
// ];

// for (let i = 0; i < chart.length; i++) {
//   const seat = chart[i];
//   for (let j = 0; j < seat.length; j++) {
//     console.log(`row no ${i + 1} seat is for ${seat[j]}`);
//   }
// }
// for checking the number divisible by 2
// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// const secret = "babyHippo";
// // let guess = prompt("eneter the animal name?");
// while (guess !== secret) {
//   guess = prompt("eneter the animal name?");
// }
// console.log("congratzzz u gussed it right");

// let submit = prompt("Enter Anything U wish and I will replay back");
// while (true) {
//   submit = prompt(submit);
//   if (submit === "stop it") {
//     break;
//   }
// }
// console.log("hi you won");

// let maximum = parseInt(prompt("Guess the maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Guess the  maximum number"));
// }

// let targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);
// let guess = parseInt(prompt("Enter your first guess"));

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") {
//     break;
//   }
//   if (guess > targetNum) {
//     guess = prompt("The number is high");
//   } else {
//     guess = prompt("The Number is low");
//   }
// }
// if (guess === "q") {
//   console.log("ok u quit");
// } else {
//   console.log("hy hy u guessed it right");
// }

// const age = 19;

// const result = age < 18 ? " water " : "wine";
// console.log(result);

// const names = [
//   "raj",
//   "shiv",
//   "amit",
//   "raman",
//   "abhi",
//   "ram",
//   "aryan",
//   "malinga",
// ];

// for (const arr of names) {
//   console.log(`HY my friend name is ${arr}`);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (const num of numbers) {
//   console.log(num * num);
// }

// while (i < numbers.length) {
//   console.log(i * i);
// }
const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};
// const keys = Object.keys(testScores);
// console.log(keys);

// for (const k of keys) {
//   console.log(k);
// }

const values = Object.values(testScores);
console.log(values);
let total = 0;
for (const score of values) {
  total = score + total;
}
console.log(total);
const average = total / values.length;
console.log(average);
