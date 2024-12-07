"use strict";

const button = document.querySelector("button");
const h1 = document.querySelector("h1");

function makeJoke() {
  fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => (h1.textContent = data.joke))
    .catch((error) => console.log(error));
}

makeJoke();

button.addEventListener("click", () => {
  makeJoke();
});
