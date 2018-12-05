let people = ["osa", "jothi", "rasuu", "blemort"]; 

// using a loop, iterate through this array and console.log all of the people 
for (let i of people) {
  console.log(`Iterating through this array with ${i}`);
}

// write a command to remove "osa" from the array 
people.shift(); 
console.log(people);

// write the command to remove blemort from array
people.pop(); 
console.log(people); 

// write the command to add porsha to the front of array 
people.unshift("porsha");  
console.log(people); 

// write the command to put aethyr to the end of the array 
people.push("aethyr"); 

// using a loop, iterate through this array and console.log "jothi", exit from the loop. 
for ( let i = 0; i < people.length; i++) {
  if (i > 1) {
    break;  
  }
    console.log(people[i]);  
}

// write a command to make a copy of the array using slice. The copy should not include the 1st and 2nd index
let newPeople = people.slice(2, 4);
console.log(newPeople); 

// write a command that gives the indexOf of where "jothi" is.
console.log(people.indexOf("jothi")); 

// write a command that gives the indexOf where "Foo" is. This should return -1
console.log(people.indexOf("Foo")); 

// redefine the people variable with the value you started with. 
people = ["osa", "jothi", "rasuu", "blemort"];
console.log(people)

// use splice to remove rasuu and insert padro and cortez in its place
people.splice(2, 1, "padro", "cortez"); 
console.log(people); 

// create new var and set it equal to the people array concatenated with the string 'blue'
let newVar = people.concat("blue"); 
console.log(newVar); 
