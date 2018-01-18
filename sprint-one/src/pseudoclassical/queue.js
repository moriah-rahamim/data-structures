// Spec: Use pseudoclassical classes to construct a queue object
// Justification: To create new queues whose methods are found via
//   fallthrough lookups on a single object, taking advantage of
//   pseudoclassical-style performance enhancements and very short,
//   clean code structure
// Behavior: Create a new queue object that properly accesses fallthrough
//   methods for enqueue, dequeue, and size from prototype property as the
//   fallback object
var Queue = function() {
  // implied: this = Object.create(Queue.prototype)

  // define properties for count, startPosition, and storage

  // implied: retur_n this
};

// enqueue method: add new item to back of queue
Queue.prototype.enqueue = function() {

};

// dequeue method: remove item from front of queue, return it
Queue.prototype.dequeue = function() {

};

// size method: return the size of the current queue
Queue.prototype.size = function() {

};

