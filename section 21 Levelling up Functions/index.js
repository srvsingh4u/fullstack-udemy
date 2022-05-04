//lexical scope

function outer() {
  const arr = [1, 3, 4, 5, 7, 8, 9];
  function inner() {
    const result = arr[1] + arr[2];
    console.log(result);
  }
  inner();
}
outer();

const first = function (func) {
  func();
  func();
};

const roll = function () {
  const num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
};
first(roll);

// first(roll());

// btn.addevenetlsitner("click", chnage);

const makeBetweenfunc = function (min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
};

// const result = makeBetweenfunc(18, 45);
// console.log(result(21));

const myMath = {
  pie: 3.14,
  dob: 1994,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

const result = Object.values(myMath);

console.log(result);
console.log(myMath.cube(4));
console.log(myMath.pie);
console.log(myMath.square(2));

const dog = {
  name: "Duffy",
  breed: "German Shephard",
  bark() {
    console.log(
      `${this.name} make the noise very common of a adult ${this.breed}`
    );
  },
};
dog.bark();
const dog2 = dog.bark;
// console.log(dog2());
// console.log(dog.bark());
