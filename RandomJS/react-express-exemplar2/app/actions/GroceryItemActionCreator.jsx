const dispatcher = require('./../dispatcher.js');

module.exports = {
  add: function(item) {
    dispatcher.dispatch({
      payload: item,
      type: "grocery-item:add" // in Flux actions are also better to have types, aka a string, that gives dispatchers and stores lots of info about what is happening
    })
  }
}