let input = prompt("WHAT would You Like to do");
const todo = ["run", "play", "gym"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("********");
    for (let i = 0; i < todo.length; i++) {
      console.log(` ${i} : ${todo[i]}`);
    }
    console.log("********");
  } else if (input === "new") {
    const newItem = prompt("what you want to add");
    todo.push(newItem);
    console.log(`${newItem} has been added to the list `);
  } else if (input === "delete") {
    const index = parseInt(prompt("what you want to del? enter an idex?"));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`okkk deleted ${todo[index]}`);
    } else {
      console.log("Not a valid index");
    }
  }
  input = prompt("WHAT would You Like to do");
}
console.log("you quit the app");
