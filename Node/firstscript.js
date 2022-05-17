for (let i = 1; i < 10; i++) {
  // console.log("this is my first node js code");
}

const args = process.argv.slice(2);
for (let arg of args) {
  console.log(`Hi theres, ${arg}`);
}
const add = function (x, y) {
  return x + y;
};

const pi = 3.14;
console.log(pi);

// // export modue
const addd = "raj";
module.exports.addd = addd;
module.exports.pi = pi;
