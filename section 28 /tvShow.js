const form = document.querySelector("#searchForm");

// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//   const searchTerm = form.elements.query.value;

//   const movies = await axios.get(
//     `https://api.tvmaze.com/search/shows?q=${searchTerm}`
//   );

//   imagePrint(movies.data);
// });

// const imagePrint = (show) => {
//   for (let result of show) {
//     if (result.show.image) {
//       const img = document.createElement("img");
//       img.src = result.show.image.medium;
//       document.body.append(img);
//     }
//   }
// };

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchinput = form.elements.query.value;
  //   console.log(searchinput);
  const movies = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchinput}`
  );
  imagePrint(movies.data);
});

const imagePrint = (show) => {
  for (let result of show) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
