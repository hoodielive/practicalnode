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

// indexOf finds the 'first' index of the element passed in (starting from the left)
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

let yourFavoriteSeries = prompt("What's your favorite movies?");

if (favoriteSeries.indexOf(yourFavoriteSeries > -1)) {
    console.log(`Oh, cool, I've heard of ${yourFavoriteSeries}!`);
}
else {
    console.log(`I haven't heard of ${yourFavoriteSeries} but I will check it out!`);
};
