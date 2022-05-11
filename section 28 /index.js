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

const starwars = async function () {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);

    const res3 = await fetch("https://swapi.dev/api/people/3");
    const data3 = await res3.json();
    console.log(data3);
  } catch {
    console.log("we caught an earror");
  }
};
starwars();
