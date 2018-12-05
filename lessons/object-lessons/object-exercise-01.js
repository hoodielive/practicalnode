// Given the following object below, write code to print the value then the key to the console separated 
// by '=>':

var namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}

for (singlekey in namesAndHobbies) {
  console.log(namesAndHobbies[singlekey])
}
