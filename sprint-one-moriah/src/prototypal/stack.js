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
    // add the new item to the top and increment the count
    this.storage[this.count] = item;
    this.count++;
  },

  // Remove the top item from the stack, and return it
  pop: function() {
    if (this.count > 0) { // if there is at least one item on the stack
      // pop off the top item, decrement count, and return the popped item
      let item = this.storage[this.count - 1];
      delete this.storage[this.count - 1];

      this.count--;

      return item;
    }
  },

  // Return the size of the stack
  size: function() {
    return this.count;
  }
};


