const happy_array = [1,2,3,4,5];

let even = function(element) {
  return element % 2 === 0;
};

console.log(happy_array.some(even));
console.log(happy_array.every(even));
happy_array.map(function(happy) {
    console.log(happy);
})

console.log(happy_array.pop());
console.log(happy_array.push('43'));
console.log(happy_array.shift());
console.log(happy_array);
console.log(happy_array.unshift());
console.log(happy_array);
