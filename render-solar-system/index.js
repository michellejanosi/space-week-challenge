const solarSystem = document.getElementById('solarSystem');
const planets = [
  {
    name: 'Mercury',
    diameter: 4879,
    color: 'grey',
  },
  {
    name: 'Venus',
    diameter: 12104,
    color: 'yellow',
  },
  {
    name: 'Earth',
    diameter: 12742,
    color: 'green',
  },
  {
    name: 'Mars',
    diameter: 6779,
    color: 'pink',
  },
  {
    name: 'Jupiter',
    diameter: 139822,
    color: 'yellow',
  },
  {
    name: 'Saturn',
    diameter: 116464,
    color: 'orange',
  },
  {
    name: 'Uranus',
    diameter: 50724,
    color: 'grey',
  },
  {
    name: 'Neptune',
    diameter: 49244,
    color: 'blue',
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

function renderPlanets() {
  planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');

    // to render planets
    planetDiv.style.background = `linear-gradient(90deg, ${planet.color}, #000)`;
    planetDiv.style.width = `${planet.diameter / 15000}em`;
    planetDiv.style.height = `${planet.diameter / 15000}em`;

    solarSystem.appendChild(planetDiv);
  });
}

renderPlanets();