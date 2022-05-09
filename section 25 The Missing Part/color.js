const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const change = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener("click", function () {
  const newColor = change();
  body.style.backgroundColor = newColor;
  h1.innerText = change();
});
