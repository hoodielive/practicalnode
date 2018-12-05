const isOverPointFive = () => Math.random() > .5 ? true : false; 
console.log(isOverPointFive()); 

const name = (fname) => console.log(fname); 
console.log(name('larry'));

// Create an array called favoriteFoods which contains the strings "pizza" and "ice cream"
let favoriteFoods = ['pizza', 'ice cream']; 

// Write a function called randomFood. The function should use Math.random to randomly choose a 
// favorite food in your favoriteFoods array to return. 
function randomFood() {
  let varIndex = Math.floor(Math.random() * favoriteFoods.length); 
  return console.log(favoriteFoods[varIndex]);
}
randomFood(); 
