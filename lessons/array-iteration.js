// suppose you have an array of numbers that you want to round to the nearest whole number

let decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1,6]; 

/** you could use decimals[0] = Math.round(decimals[0]) but this would not scale well */

for (let i = 0; i < decimals.length; i++) {
  decimals[i] = Math.round(decimals[i]);
}

// do..while
let i = 0;
do {
  console.log(i);
  i++;
} while(i < 5);

let c = 0;
while(c < 0) {
    console.log(i);
    c++; // nothing is logged because 0 < 0 is false
}

let j = 0;
do {
    console.log(i);
    j++; 
} while(j < 0);
