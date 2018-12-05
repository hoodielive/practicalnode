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

// Create a variable called numbers which is an array that contains the numbers 1 through 10
let numbers = [1,2,3,4,5,6,7,8,9,10]; 

// write a function that console.logs all the odd numbers of numbers array.
function oddNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
      console.log(numbers[i]);  
    } 
  }
}
oddNumbers(); 
// write a function that console.logs all the even numbers of the numbers array.
function evenNumbers() {
  if(numbers[i] % 2 === 0) {
    console.log(numbers[i]);  
  }
}
evenNumbers();
// Create a function called returnFirstOddNumber
function firstOddNum() {
  if(numbers[i] % 2 === 0) {
    return(numbers[i]); 
  }
}


