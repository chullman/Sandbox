// We are allowed to use require here because we are using Browserify

const React = require('react');

const ReactDOM = require('react-dom');

let GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList />, document.getElementById('app'))