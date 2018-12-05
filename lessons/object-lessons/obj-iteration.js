// use for..in to iterate over objects 
let obj = { 
  name: "Paimon", 
  mathWizard: true, 
  masterOfMind: true,
}

for (singleKey in obj) {
  console.log(obj[singleKey]); 
}

// check for the existence of a key in an object with if..in
if ("name" in obj) {
  console.log("Yes Paimon is here!")
}
