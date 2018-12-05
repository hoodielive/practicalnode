// skip the current iteration and continue the loop at the next step in the iteration bu using 'continue' 

for (let i = 0; i < 5; i++) {
  if(Math.random() > 0.5) {
    console.log("Skipping the console.log when i is " + i);
    continue; 
  }
  console.log(i);
}
