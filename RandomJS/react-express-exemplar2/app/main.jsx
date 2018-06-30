// We are allowed to use require here because we are using Browserify

const React = require('react');

const ReactDOM = require('react-dom');

let GroceryItemList = require('./components/GroceryItemList.jsx');

const groceryItemStore = require('./stores/GroceryItemStore.jsx')
let initial = groceryItemStore.getItems();

function render() {
  ReactDOM.render(<GroceryItemList items={initial} />, document.getElementById('app'))
}
groceryItemStore.onChange(function(items){
  initial = items;
  render();
})
render();
