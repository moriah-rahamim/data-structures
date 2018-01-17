// Spec: Use prototypal classes to construct a queue object
// Justification: To create new queues whose methods are found via
//   fallthrough lookups on a single separate object, with no need
//   for copying each property to the queue object
// Behavior: Create a new queue object that properly accesses fallthrough
//   methods for enqueue, dequeue, and size
var Queue = function() {
  // Create someInstance with queueMethods as a prototype
  // (i.e. failed property lookups are delegated to queueMethods)

  // Create variables for count, start position, and storage for the queue

  // return the newly-created queue

};

// Object to hold the methods used by Queue objects
// This will be the prototype object for the Queue objects
var queueMethods = {
  // add a new item to the back of the queue
  enqueue: function(item) {

  },

  // remove oldest item from the front of the queue, and return it
  dequeue: function() {

  },

  // return the current size of the queue
  size: function() {

  }
};


