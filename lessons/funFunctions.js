// functions are indeed objects 

const f = function() { console.log('Boo')}
f.boo = 1

f()
console.log(f.boo); 

/** 
 * note that anonymous funcs are not hoisted therefore 
 * can NOT be called prior to creation
 */ 

const convertNum = function(num) {
  console.log(num + 10)
  return 0
}

const processNum = function(num, fn) {
  console.log(fn(num))
  return 0
}

processNum(10, convertNum)

// implicit returns 
const fWithImplicitReturn = (a, b) => a + b; 

