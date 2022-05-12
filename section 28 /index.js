// const rew = new XMLHttpRequest();
// rew.onload = function () {
//   console.log("it loaded");
//   const data = JSON.parse(this.responseText);

//   console.log(data);
// };
// rew.onerror = function () {
//   console.log("error encounter");
// };
// rew.open("get", "https://swapi.dev/api/people/1");
// rew.send();

// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("it loaded");
//   console.log(JSON.parse(this.responseText));

//   const data = Object.keys(JSON.parse(this.responseText));
//   for (let d of data) {
//     console.log(d);
//   }
// };

// req.open("get", " https://swapi.dev/api/people/1");
// req.send();

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("Resolved", res);
//     return res.json();
//   })
//   .then(async (data) => {
//     console.log(data);
//     const req = await fetch("https://swapi.dev/api/people/2");
//       console.log(req);
//       const data_2 = await req.json();
//       console.log(data_2);
//   })

//   .catch((err) => console.log(err));

// // const starwars = async function () {
// //   try {
// //     const res = await fetch("https://swapi.dev/api/people/1");
// //     const data = await res.json();
// //     console.log(data);
// //     const res2 = await fetch("https://swapi.dev/api/people/2");
// //     const data2 = await res2.json();
// //     console.log(data2);

// //     const res3 = await fetch("https://swapi.dev/api/people/3");
// //     const data3 = await res3.json();
// //     console.log(data3);
// //   } catch {
// //     console.log("we caught an earror");
// //   }
// // };
// // starwars();

// // const starName = axios
// //   .get("https://swapi.dev/api/people/3")
// //   .then((res) => console.log("response: ", res));

// const starwarsperson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data);
//   } catch {
//     console.log("the error");
//   }
// };
// starwarsperson(4);

// const wars = async (id) => {
//   try {
//     const req = await axios.get(`https://swapi.dev/api/peoplsde/${id}`);
//     console.log(req.data);
//   } catch {
//     console.log("error was found ");
//   }
// };

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const dadsJoke = async () => {
  try {
    const config = {
      headers: { Accept: "application/json" },
    };
    const jokes = await axios.get("https://icanhazdadjoke.com/", config);
    return jokes.data.joke;
  } catch {
    return "No Jokes Available:(";
  }
};

const newjokes = async () => {
  const joketext = await dadsJoke();
  const newli = document.createElement("li");
  newli.append(joketext);
  jokes.append(newli);
};

button.addEventListener("click", newjokes);
