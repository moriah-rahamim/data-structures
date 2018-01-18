var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Start position tells us what number currently represents the front of the queue
  var startPosition = 0;

  someInstance.enqueue = function(value) {
    // add the newest item onto the back of the queue
    storage[startPosition + count] = value;
    // increment the count
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      // remove the oldest item from the front of the queue
      let value = storage[startPosition];
      delete storage[startPosition];
      // update the start position for the queue
      startPosition++;
      // decrement the count
      count--;
      // return the item that we removed from the queue
      return value;
    } else {
      // otherwise, do nothing
      return undefined;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
