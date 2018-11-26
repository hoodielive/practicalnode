const happy_array = [1,2,3,4,5];

let even = function(element) {
  return element % 2 === 0;
};

console.log(happy_array.some(even));
console.log(happy_array.every(even));

happy_array.map(function(happy) {
    console.log(happy); 
})
