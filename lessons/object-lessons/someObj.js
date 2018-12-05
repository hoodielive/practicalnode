// make a basic object 

let obj = {
  firstName: "Agatho", 
  lastName: "Daemon", 
  isInstructor: true
}; 

console.log(obj);

// access values in object 
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.isInstructor);
console.log(obj.keyDoesntExist); // undefined

// or use brackets [use brackets when you need to evaluate some expression]
console.log(obj['isInstructor']); 

let idToName = { 
  754: "Tru", 
  843: "Maat", 
  921: "Janu", 
  192: "Esu"
}; 

// javascript will automatically convert your 'key' into a string. Every key is a string! 
console.log(idToName[754]); 
console.log(idToName["754"]); 

obj.gameOfThrones = "awesome";
console.log(obj); 

// remove a key from object by using delete keyword. 

delete obj.keyDoesntExist; 
console.log(obj); 
