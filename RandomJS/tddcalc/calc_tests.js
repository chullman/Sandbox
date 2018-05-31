const assert = require('assert');
const { Calculate } = require('./calculator.js');

const c = new Calculate;

describe("Add", () => {
  it("Should add two numbers together", () => {
    // eg. add(1,2) should equal 3
    
    assert.equal(3, c.add(1,2))
    assert.equal(3, c.add(1,2))
  })
})

describe("Subtract", () => {
  it("Should subtract two numbers", () => {
    // eg. subrtract(10,6) should equal 4
    assert.equal(4, c.subtract(10,6))
  })
})