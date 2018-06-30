const React = require('react');
const { Component } = require('react')
const GroceryItem = require('./GroceryItem.jsx')
const GroceryItemAddList = require('./GroceryListAddItem.jsx');

module.exports = class GroceryItemList extends Component{
  // All classes must implement Render
  render() {
    // Parenthesis makes the return "non-breaking", so whatever is returned, JavaScript knows to keep on compiling
    return (
      <div>
        <h1>Grocery Listify</h1>
        <div>
          {
            this.props.items.map(function(item, index) {
              return (
                <GroceryItem item={item} key={"item"+index}/>
              )
            })
          }
        </div>
        <GroceryItemAddList />
      </div>
    )
  }
}
