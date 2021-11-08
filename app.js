import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const title = "";

const showBackground = true;

const images = [];

for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);

  const fact = animals[animal].facts[index];

  document.getElementById("fact").innerHTML = fact;
}

const animalFacts = (
  <div>
    {showBackground && background}
    <p id="fact"> </p>
    <div className="animals">{images}</div>
    <h1>{title ? title : "Click an animal for a fun fact"} </h1>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
