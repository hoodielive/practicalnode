var programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: 'http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke'
};

// write a command to add the Go language  to the end of the languages key array: 
programming.languages.push('Go'); 
console.log(programming); 

// change the value of difficulty to 7
programming.difficulty = 7; 
console.log(programming.difficulty); 

// remove the jokes key from the object 
delete programming.jokes; 
console.log(programming); 

// write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true; 
console.log(programming.isFun); 

// Using a loop, iterate through the languages array and console.log all of the languages.
for (let singlekey in programming.languages) {
  console.log(programming.languages[singlekey]); 
}

// Using a loop, console.log all of the keys in the programming object
for (let singlekey in programming) {
  console.log(singlekey); 
}

// Using a loop, console.log all of the values in the programming object.
for (let singleValues in programming) {
  console.log(programming[singleValues]);
}
