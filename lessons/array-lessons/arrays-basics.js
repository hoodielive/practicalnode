// Create an array of your favoriteFoods and name it as such
let favoriteFoods = ['spaghetti', 'oatmeal', 'mac-n-cheese', 'watermelon'];
console.log(favoriteFoods);

// Access the second element in favoriteFoods
console.log(favoriteFoods[1]);

// Change the last element in favoriteFoods to some other food
console.log(favoriteFoods.pop());
console.log(favoriteFoods.push('banana'));
console.log(favoriteFoods);

// Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood
let formerFavoriteFood = favoriteFoods.shift();
console.log('here');
console.log(formerFavoriteFood);

// Add a favorite food to the back of favoriteFoods
favoriteFoods.push('avocado');
console.log(favoriteFoods);

// Add a favorite food to the front of favoriteFoods
favoriteFoods.unshift('greens');
console.log(favoriteFoods);

// This is what happens when you try to pop from an empty array
let emptyArray = [];
console.log(emptyArray.pop());

// In these examples below, use splice to convert the first array to the second array:
let firstSplice = [2, 3, 4, 5]; // needs to become [2, 4, 5]
console.log(firstSplice);
firstSplice.splice(1,1);
console.log(firstSplice);

let secondSplice = ["alpha", "gamma", "delta"]; // ["alpha", "beta", "gamma", "delta"];
console.log(secondSplice);
secondSplice.splice(1,0, "beta");
console.log(secondSplice);

let thirdSplice = [10, -10, -5, -3, 2, 1]; // [10,9,8,7,6,5,4,3,2,1];
console.log(thirdSplice);
thirdSplice.splice(0,6,10,9,8,7,6,5,4,3,2,1);
console.log(thirdSplice);
