const assert = require('assert');
const { Calculate } = require('./calculator.js');

const c = new Calculate;

describe("Add", () => {
  it("Should add all numbers together", () => {
    // eg. add(1,2) should equal 3
    
    assert.equal(1, c.add(1))
    assert.equal(3, c.add(1,2))
    assert.equal(100, c.add(10,40,50))
  })
})

describe("Subtract", () => {
  it("Should subtract two numbers", () => {
    // eg. subrtract(10,6) should equal 4
    assert.equal(4, c.subtract(10,6))
  })
})

describe("Divide", () => {
  it("Should divide two numbers", () => {
    assert.equal(2, c.divide(10, 5))
  })
})