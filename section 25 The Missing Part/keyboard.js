// document.body.style.backgroundColor = "red";

document.querySelector("button").addEventListener("click", () => alert("hy"));
const key = document.querySelector("input");
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("arrowup");

      break;
    case "ArrowDown":
      console.log("arrowdown");
      break;
    default:
      break;
  }
});
// key.addEventListener("keyup", (e) => console.log("keyup"));
