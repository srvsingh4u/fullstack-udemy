// const image= document.getElementById()

const squareimg = document.getElementsByClassName("square");

// for (const img of squareimg) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/f/ff/Royal-bengal-tiger-wallpaper.jpg";
// }

const images = document.getElementsByTagName("img");

// for (const img of images) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/f/ff/Royal-bengal-tiger-wallpaper.jpg";
// }
const para = document.querySelector("p");

const banner = document.querySelector("#banner");

const sqaure = document.querySelectorAll(".square");
const heading = document.querySelector("h1");
// heading.style.color = "red";
// heading.style.background = "teal";

const tags = document.querySelectorAll("a");
const change = function () {
  para.style.color = "red";
};
let btn = document.createElement("button");
btn.innerText = "hello";
para.appendChild(btn);
btn.addEventListener("click", change);
