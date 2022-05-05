const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const re = numbers.map((ar) => ar * 2);
console.log(re);

// numbers.forEach((arr) => console.log(arr * 2));

// // console.log(result);
// const filter = numbers.filter((ar) => ar > 7);
// console.log(filter);

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach((mov) => console.log(`${mov.title}: ${mov.score}`));

const ress = movies.map((mv) => mv.title);
console.log(ress);

// movies.forEach(function (movie) {
//   console.log(`${movie.title} : ${movie.score} `);
// });
const res = movies.map((movie) => movie.title.toUpperCase());
console.log(res);

const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

// Write your code here

const firstName = fullNames.map((name) => name.first);
console.log(firstName);
// console.log(typeof firstName);

const square = (num) => num ** 2;
console.log(square(4));

const greet = (name) => `Hey ${name}`;
console.log(greet("raj"));

const rollDice = () => Math.floor(Math.random() * 6) + 1;
console.log(rollDice());

const isEven = (num) => num % 2 === 0;
console.log(isEven(11));

console.log("--------set Interval---------");

// const hello = setTimeout(() => {
//   console.log("hello boys");
// }, 2000);

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// clearInterval(2);

const movie = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const rated = movie.reduce((high, best) => {
  if (high.score < best.score) {
    return high;
  } else {
    return best;
  }
});

console.log(rated);
const movieDate = movie.map((m) => m.year);
// .some((m) => m > 2015);
console.log(movieDate);

const highRated = movie.filter((mov) => mov.score > 80);

console.log(highRated);

const recentMovies = movie.filter((m) => m.year > 1990);
console.log(recentMovies);
const years = recentMovies.map((r) => r.year);
console.log(years);

const title = movie.filter((mo) => mo.year > 1990).map((mov) => mov.title);
console.log(title);

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

const result = exams.every((a) => a > 60);
console.log(result);

const rep = exams.some((a) => a > 100);
console.log(rep);

let str = [2, 3, 4];
function allEvens(element, index, array) {
  return element % 2 == 0;
}
str.every(allEvens);

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const sum = prices.reduce((acc, b) => acc + b, 5);
console.log(sum);
