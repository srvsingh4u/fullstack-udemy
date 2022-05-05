console.log("-------default parameter------");

const greet = function (msg, people) {
  console.log(`${msg} ${people}`);
};
greet("hi", "ravi");

const hello = function (people, greet = "!", msg = "hello") {
  console.log(`${msg} ${people} ${greet}`);
};
hello("raj");
hello("ravi", "@", "wassup big guy");

console.log("-----spread-----");

const arr = [2, 3, 4, 5, 6, 7, 9];

console.log(...arr);

console.log([..."hello"]);
const player1 = ["ravi", "shaw", "warner", "smith"];
const player2 = ["williamson", "umran", "sundar", "venky"];

const team = [...player1, ...player2];
console.log(team);

const arr2 = "hello";
const arre = { ...arr2 };
console.log(Object.values(arre));
console.log("----rest-----");
function add(...num) {
  return num.reduce((a, b) => a + b);
}

console.log(add(2, 3, 5, 6));

console.log("------Destructuring-----");
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];
const [gold, silver, ...rest] = scores;
console.log();
console.log(silver);
console.log(rest);

const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

const { email, password, ...one } = user;
console.log(email);
console.log(one);

function name({ email, state }) {
  console.log(`${email} and her state is ${state}`);
}

name(user);
