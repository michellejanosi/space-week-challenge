// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star
const stars = new Array(100).fill('✨ ⭐️');
const galaxy = document.getElementById('galaxy');
galaxy.innerHTML = stars.join(' ').repeat(10);