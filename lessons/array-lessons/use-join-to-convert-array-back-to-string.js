// use join to convert array back to string 
let dashedString = "lots-of-dashes"; 
let removedDashes = dashedString.split("-");
console.log(removedDashes); 

let reDashes = removedDashes.join("-"); 
console.log(reDashes); 
