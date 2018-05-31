class Calculate {

  add(...args) {
    let sum = 0;

    for (let arg of args)  {
      sum += arg;
    }
  
    return sum;
  }

  subtract(a ,b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

}

// function add(a, b) {

// }

// const add = function(a, b) {

// }

module.exports = { Calculate }