const add = function (a, b) {
  return a + b;
};

console.log(add(2, 4));
// console.log(add(212, 4));
// console.log(add(2, 421));
// console.log(add(211, 4));
// console.log(add(233, 41));

const greeting = (name) => console.log(`hiii ${name}`);
greeting("raj");

const fruitCutter = function (orange, mango) {
  console.log(
    `In order to make juice we need ${orange} orange and ${mango} mangoes`
  );
};
fruitCutter(6, 7);

const print = function (str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
};
print("hi", 2);

// const h = "hiii";
// const r = h.repeat(6);
// console.log(r);

const isSnakeEyes = function (dice1, dice2) {
  if (dice1 === 1 && dice2 === 1) {
    console.log("Snake Eyes");
  } else {
    console.log("Not Snake Eyes");
  }
};
isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
// isSnakeEyes(1, 1);

// const arr = ;
// console.log(arr[arr.length - 1]);

const lastElement = function (arr) {
  if (arr.length !== 0) {
    return arr[arr.length - 1];
  } else {
    return null;
  }
};
console.log(lastElement([1, 2, 4, 5, 6]));
console.log(lastElement([]));

// DEFINE YOUR FUNCTION BELOW:
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const returnDay = function (num) {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num - 1];
  }
};
console.log(returnDay(1));
