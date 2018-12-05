// exit a loop before it has finished with the break keyword

for (let i = 0; i < 5; i++) {
  if(Math.random() > 0.5) {
    console.log("Breaking out of the loop when i is " + i);  
  }
  else {
    console.log(i); 
  }
}
