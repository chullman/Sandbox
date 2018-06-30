const guid = require('guid');

// a dispatcher registers listeners and sends events to those listeners at the appropriate time

let listeners = {};

module.exports = {
  register: function(cb) {
    let id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  dispatch: function(payload) {
    console.info("Dispatching...",payload);
    for (let id in listeners) {
      let listener = listeners[id];
      listener(payload);
    }
  }
};