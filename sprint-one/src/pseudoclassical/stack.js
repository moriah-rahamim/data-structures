// Spec: Use pseudoclassical classes to construct a stack object
// Justification: To create new stacks whose methods are found via
//   fallthrough lookups on a single object, taking advantage of
//   pseudoclassical-style performance enhancements and very short,
//   clean code structure
// Behavior: Create a new stack object that properly accesses fallthrough
//   methods for push, pop, and size from prototype property as the
//   fallback object
var Stack = function() {
  // implied: this = Object.create(Stack.prototype);

  // add properties for count and storage
  this.count = 0;
  this.storage = {};

  // implied: retur_n this
};

// push method: push new item onto the stack
Stack.prototype.push = function(item) {
  // add item to top of stack, increment count
  this.storage[this.count] = item;
  this.count++;
};

// pop method: pop item off top of the stack, return it
Stack.prototype.pop = function() {
  if (this.count > 0) {
    // remove item from top of stack, decrement count, return the item
    var item = this.storage[this.count - 1];
    delete this.storage[this.count - 1];

    this.count--;

    return item;
  } else {
    return undefined;
  }
};

// size method: return size of the current stack
Stack.prototype.size = function() {
  return this.count;
};
