// Use prototypal classes to create a stack object.
// Inputs: none | Outputs: stack object.
// Behavior: create a new stack object that properly accesses
//   fallthrough methods for push, pop, and size
var Stack = function() {
  // stackMethods is a prototype for the stack
  // (i.e. failed property lookups are delegated to stackMethods)
  var someInstance = Object.create(stackMethods);

  // keep track of number of items in the stack
  someInstance.count = 0;
  // holds whatever is in the stack
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  // Add a new item onto a stack
  push: function(item) {

  },

  // Remove the top item from the stack, and return it
  pop: function() {

  },

  // Return the size of the stack
  size: function() {

  }
};


