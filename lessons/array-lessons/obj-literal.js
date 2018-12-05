const car = {
  color: "green", 
  type: "suv", 
  owner: {
    name: 'Larry',
    price: 93000
  }, 
  drive: function() {
    console.log('Perfecto!') 
  }
}

console.log(car)

const microService = {
  port: 3000, 
  url: 'localhost'
}

const getServices = () => { 
  return [1,2,3] 
}

const accountService = {
  __proto__: microService, 
  getUrl() {
    return `http://${this.url}:${this.port}`
  },
  getServices()
    .toString() { 
      return JSON.stringify((super.valueOf()))
    }, 
  [`'valueOf_' ${getServices()}.join('_')` ]: getServices()
}
