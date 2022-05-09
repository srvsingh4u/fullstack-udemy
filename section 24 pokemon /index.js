const section = document.querySelector("#section");

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 153; i++) {
  const pokemon = document.createElement("div");
  const label = document.createElement("span");
  label.innerHTML = i;
  const newimg = document.createElement("img");
  newimg.src = `${baseURL}${i}.png`;
  pokemon.classList.add("pokemon");
  section.appendChild(pokemon);
  pokemon.appendChild(newimg);
  pokemon.appendChild(label);
}
