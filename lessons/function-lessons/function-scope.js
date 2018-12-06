// make a function for add, subtract, multiply, and divide - each of these functions should accept 2 params 
// and return the sum, difference, product and quotient 

function add(a, b) {
  return console.log(a + b);
}

function subtract(a, b) {
  return console.log(a - b);
}

function multiply(a, b) {
  return console.log(a * b);
}

function divide(a, b) {
  return console.log(a / b);
}

add(2, 2); 
subtract(2,2); 
multiply(2,2);
divide(2,2);

// sayHello - if its Timothy then respond a certain way, any one else another way. 
function sayHello(name) {
  if (name === "Timothy") {
    console.log('Hello, Timothy');
  }
  else {
    console.log(name, "Hello");
  }
}
sayHello('Lawrence'); 
sayHello('Timothy');

// find the average of
function average(arr) {
  let total = 0; 
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]; 
  }
  return console.log(total / arr.length)
}
average([1,2,3,4,5]); 

function createStudent(fname, lname) {
  let fullname = {
    fname: fname,
    lname: lname
  }
  console.log(fullname.fname, fullname.lname)
} 
createStudent("Mr", "Goose")

function createStudent2(fname, lname) {
  return {
    fname: fname,
    lname: lname,
  }
}

createStudent2("Mrs", "Goose");

let students = ["tim", "matt", "elie"]; 
function findStudentByFirstName(firstname) {
 for (let i = 0; i < firstname.length; i++) {
    if (firstname[i] === firstname[i]) {
      return console.log(true);  
    }
 } 
}
findStudentByFirstName('matt'); 


// write a function that takes an arr as arg and extract every 3rd element
function extractEveryThird(arr) {
  let newArr = [];
  for (let i = 2; i < arr.length; i += 3) {
    newArr.push(arr[i]); 
  }
  return console.log(newArr);
}
extractEveryThird([1,2,3]);
extractEveryThird([1,2,3,1,2,3]);
