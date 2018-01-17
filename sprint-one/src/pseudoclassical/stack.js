// Spec: Use pseudoclassical classes to construct a queue object
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

  // implied: return this
};

// push method: push new item onto the stack
Stack.prototype.push = function() {

};

// pop method: pop item off top of the stack, return it
Stack.prototype.pop = function() {

};

// size method: return size of the current stack
Stack.prototype.size = function() {

};
