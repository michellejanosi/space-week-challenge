const solarSystem = document.getElementById("solarSystem");
const planetsObj = [
  {
    name: "Mercury",
    moons: 0,
  },
  {
    name: "Venus",
    moons: 0,
  },
  {
    name: "Earth",
    moons: 1,
  },
  {
    name: "Mars",
    moons: 2,
  },
  {
    name: "Jupiter",
    moons: 67,
  },
  {
    name: "Saturn",
    moons: 62,
  },
  {
    name: "Uranus",
    moons: 27,
  },
  {
    name: "Neptune",
    moons: 14,
  },
];

planetsObj.forEach(planet => {
  const planetEl = document.createElement('p');
  planetEl.innerHTML = `<span class="bold">${planet.name}</span>: ${planet.moons} moons`;
  solarSystem.appendChild(planetEl);
});

const totalMoons = planetsObj.reduce((acc, planet) => {
  return acc + planet.moons;
}, 0);

const totalEl = document.createElement('p');
totalEl.innerHTML = `Total moons in the solar system: ${totalMoons}`;
totalEl.classList.add('total-moons-p');
solarSystem.appendChild(totalEl);

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
