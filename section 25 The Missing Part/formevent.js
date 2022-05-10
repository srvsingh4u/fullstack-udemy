// // const btn = document.querySelector("#btn");
// // const sform = document.querySelector("#sform");
// // const list = document.querySelector("#name");
// // const input = document.querySelector(".firstname");
// // const number = document.querySelector(".number");
// // sform.addEventListener("submit", function (e) {
// //   e.preventDefault();
// //   const cname = input.value;
// //   const cnum = number.value;

// //   const newLi = document.createElement("li");
// //   newLi.innerText = `${cname}  ${cnum}`;

// //   list.append(newLi);
// //   input.value = " ";
// // });
// const form = document.querySelector("#sform");

// const name = document.querySelector("#name");
// const firstname = document.querySelector(".firstname");
// const number = document.querySelector(".number");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const cname = firstname.value;
//   const cnum = number.value;
//   //   console.log(cname);
//   const newli = document.createElement("li");
//   newli.innerText = `Name:${cname.toUpperCase()} password:${cnum} `;

//   name.append(newli);

//   firstname.value = " ";
//   number.value = " ";
// });

// const form = document.querySelector("form");
// const input = document.querySelector("#product");
// const qty = document.querySelector("#qty");
// const list = document.querySelector("#list");
// const change = function (e) {
//   e.preventDefault();
//   const inputvalue = input.value;
//   const quantity = qty.value;
//   const newli = document.createElement("li");
//   newli.innerText = `${inputvalue} ${quantity}`;
//   list.appendChild(newli);
//   input.value = " ";
//   qty.value = " ";
// };
// form.addEventListener("submit", change);

// const input = document.querySelector("input");
// const heading = document.querySelector("h1");

// input.addEventListener("input", function (e) {
//   const text = input.value;
//   heading.innerText = text;
// });

// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");
// input.addEventListener("input", function (e) {
//   e.preventDefault();
//   h1.innerText = `Welcome, ${input.value}`;
//   if (input.value === "") {
//     h1.innerText = "enter sohiefhr";
//   }
// });

const container = document.querySelector("#container");
const btn = document.querySelector("button");

container.addEventListener("click", function () {
  container.classList.add("hide");
  //
});
btn.addEventListener("click", function (e) {
  container.style.backgroundColor = "red";
  e.stopPropagation();
});
