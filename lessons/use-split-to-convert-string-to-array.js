// use string to convert string to array

let string = "hello aeonos"; 

console.log(string.split(""));
console.log(string.split(" "));

// if you pass a delimiter into the split method, the delimiting values will be removed from the array 
let dashedString = "lots-of-dashes-here"; 
let removedDashes = dashedString.split("-"); 
console.log(removedDashes);


