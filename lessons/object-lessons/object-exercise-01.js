// Given the following object below, write code to print the value then the key to the console separated 
// by '=>':

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (singlekey in namesAndHobbies) {
  console.log(namesAndHobbies[singlekey]); 
}

// Add your name and hobby to the existing object
namesAndHobbies.larry = "programming"; 
console.log(namesAndHobbies); 

// write your hobby to stdout if your name is found in obj

if ("larry" in namesAndHobbies) {
  console.log(namesAndHobbies.larry); 
}

