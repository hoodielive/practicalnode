// functions are indeed objects 

const f = function() { console.log('Boo')}
f.boo = 1

f()
console.log(f.boo); 

/** 
 * note that anonymous funcs are not hoisted therefore 
 * can NOT be called prior to creation
 */ 


