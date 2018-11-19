/** 
 * There are no classes in Javascript because objects inherit directly from other objects
 * which is called prototypal inheritance
 * 3 inheritance patterns 
 * Classical 
 * Pseudo-Classical 
 * Functional 
 */

/** This is an example of functional inheritance pattern in which 2 factories creates objects user and agent: */ 

let user = function(ops) {
  return { firstName: ops.firstName || 'John',
    lastName: ops.lastName || 'Doe', 
    email: ops.email || 'test@test.com', 
    name: function() { return this.firstName + this.lastName }
  }
}

let agency = function(ops) {
  ops = ops || {} 
  let agency = user(ops)
  agency.customers = ops.customers || 0 
  agency.isAgency = true 
  return agency
}

console.log(user, agency)
