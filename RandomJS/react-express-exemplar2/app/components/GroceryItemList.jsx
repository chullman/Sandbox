const React = require('react');
const { Component } = require('react')

module.exports = class GroceryItemList extends Component{
  // All classes must implement Render
  render() {
    // Parenthesis makes the return "non-breaking", so whatever is returned, JavaScript knows to keep on compiling
    return (
      <div>
        <h1>Grocery Listify</h1>
      </div>
    )
  }
}
