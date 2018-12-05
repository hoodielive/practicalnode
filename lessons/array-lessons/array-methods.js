// length can be used to remove elements/clear an array
let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[arr.length]); // undefined
console.log(arr[arr.length - 1]);

// slice makes a copy of an array if its invoked without args
let slicer = [1,2,3,4];
let copySlicer = slicer.slice();
console.log(copySlicer);

// slice can behave like splice in that you can feed it index, endIndex
let newslicer = slicer.slice(1,2);
console.log(newslicer);

// concat is to join arrays together
let combinedArrays = arr.concat(newslicer);
console.log(combinedArrays);

// join elements of an array into a string separated by whatever you pass an an arg
let joiner = ["hello", "hell"];
console.log(joiner.join(" "));

// indexOf finds the "first" index of the element passed in (starting from the left)
console.log(joiner.indexOf(1));

// usually see this function (indexOf) very commonly used to check if an element is in an array or not
let favoriteSeries = [
  "The Originals",
  "The Vampire Diaries",
  "Legacies",
  "The Last Kingdom",
  "Merlin",
  "Sanford and Son",
  "The Tudors",
  "The Vikings",
  "Jessica Jones",
  "The Rain",
  "The Walking Dead",
];

var yourFavoriteSeries = ["Cursed", "Web of Lies"];

if (favoriteSeries.indexOf(yourFavoriteSeries ) > -1) {
  console.log(`Oh, cool, I"ve heard of ${yourFavoriteSeries}!`);
}
else {
  console.log(`I haven"t heard of ${yourFavoriteSeries} but I will check it out!`);
};

// lastIndexOf works like indexOf, but starts searching from the end of the array rather than the beginning
console.log(favoriteSeries.lastIndexOf("Merlin"));

// theres a difference between primitives and objects and thus reference types
let instructor = "Osa";
let anotherInstructor = instructor;
console.log(instructor);
console.log(anotherInstructor);
anotherInstructor = "Osi";
console.log(instructor);
console.log(anotherInstructor);

// now with reference
let instructors = ["Osa", "Ori"];
let instructorsCopy = instructors;
console.log(instructors, instructorsCopy);
instructorsCopy.push("Uri");
console.log(instructors, instructorsCopy);

// create an empty array
let anotherEmptyArray = []; 
anotherEmptyArray.push("Lawrence"); 
console.log(anotherEmptyArray); 
anotherEmptyArray.push("Solomon"); 
console.log(anotherEmptyArray); 
anotherEmptyArray.unshift("black"); 
console.log(anotherEmptyArray); 
anotherEmptyArray.shift();
console.log(anotherEmptyArray); 
let _anotherEmptyArray = [];
_anotherEmptyArray.push(7); 
console.log(_anotherEmptyArray); 
_anotherEmptyArray.push("Javascript"); 
console.log(_anotherEmptyArray); 

if (_anotherEmptyArray.indexOf(7)) {
  console.log("Your favorite number is" + _anotherEmptyArray[0]); 
}
else {
  console.log("I am sorry, but your favorite number has not been revealed"); 
}; 


