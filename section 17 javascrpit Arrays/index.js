const arr = ["aman", "amit", "ravi", "shivam"];
console.log(arr[-1]);

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = "Luna";
console.log(leaderboard);
leaderboard[3] = "Draco";

console.log(leaderboard);

const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
planets.shift();
console.log(planets);
planets.push("Saturn");
console.log(planets);
planets.unshift("Mercury");
console.log(planets);

const arr2 = ["rinku", "ramana", "rima"];
const newArr = arr.concat(arr2);
console.log(newArr);

console.log(newArr.includes("ravi"));
console.log(newArr.indexOf("amit"));
// console.log(newArr.reverse());

console.log("slice---------------");
const nwarr = newArr.slice(2, 3);
console.log(nwarr);
console.log(newArr);
console.log("splice-------------");
const newsl = newArr.splice(2, 1, "david mller", "sunil narine");
console.log(newsl);
console.log(newArr);

const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3].splice(1, 1, "hogo");
console.log(airplaneSeats);
