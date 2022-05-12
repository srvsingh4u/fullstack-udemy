// const colourGen = function (r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb${r}${g}${b}`;
//   };

//  return color; };
//  console.log(colourGen(233, 13, 14))
// constructor{
// const person = function (name, age, state, cnty) {
//   this.name = name;
//   this.age = age;
//   this.state = state;
//   this.cnty = cnty;
// };
// }

// const person1 = new person("amit", 24, "bengal", "india");
// const person2 = new person("ajay", 23, "tn", "india");
// console.log(Object.values(person2));
// console.log(person1, person2);

// const human = {
//   name: "raj",
//   age: 23,
//   country: "India",
//   city: "Bihar",
//   pincode: 219837,
//   hobby: "basketball",
// };
// human.name = "amit";
// console.log(human);
// console.log(human.name, human.age, human.pincode);

class person {
  constructor(name, age, number, state) {
    this.name = name;
    this.age = age;
    this.number = number;
    this.state = state;
  }
  greet() {
    return ` HeLLO ${this.name} wassup whats your age ? hi i m ${this.age}`;
  }
  hello() {
    return ` hello ${this.name} and ur number is ${this.number}`;
  }
}

const pr = new person("raj", 23, 1232896, "Assam");
console.log(pr);
// const value = Object.values(pr);
console.log(pr.greet());
console.log(pr.hello());
console.log(value);
// for (let v of value) {
//   console.log(v);
// }
// console.log(value[0]);
