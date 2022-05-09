const button = document.querySelector("#btn");
const heaading = document.querySelector("h1");
const change = function () {
  heaading.style.color = "red";
};
const btn = document.querySelector("#btn2");
// button.onclick = function () {
//   console.log("clicked");
//   console.log("the button ");
// };
// button.onmouseenter = function () {
//   console.log("hy hy hy ");
// };

button.addEventListener("click", change);

btn.addEventListener("click", () => alert("hy wassup"));
