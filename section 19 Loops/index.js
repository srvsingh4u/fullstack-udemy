console.log("---For---------loops----------");

for (let i = 1; i <= 10; i++) {
  console.log(`This is the ${i} loop statment`);
}

for (let i = 1; i <= 10; i++) {
  console.log("I am n the loop ");
  console.log(`${i}`);
}

console.log("------EVEN NUMBERS------");

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(`${i}`);
  }
}
console.log("========simple method====");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

console.log("----- decrement-----");

for (let i = 100; i >= 10; i -= 10) {
  console.log(i);
}

console.log("----exrecise-----");
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// for (const ar of people) {
//   console.log(ar);
// }

for (let i = 1; i <= 4; i++) {
  console.log(`i is ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(`  ${i}:  j is ${j}`);
  }
}
console.log("-----Nested Loop-----");
const chart = [
  ["amit", "raj", "riya"],
  ["shivam", "abhi", "dhoni", " miller"],
  ["avesh", "siraj", "thakur", "rinku"],
  ["moin", "babar azam", "virat", "ab"],
];

for (let i = 0; i < chart.length; i++) {
  const seat = chart[i];
  for (let j = 0; j < seat.length; j++) {
    console.log(`row no ${i + 1} seat is for ${seat[j]}`);
  }
}
