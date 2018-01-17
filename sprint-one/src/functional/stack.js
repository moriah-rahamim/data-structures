var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Adds a new item onto the stack
  someInstance.push = function(value) {
    // Add the new item onto the stack
    storage[count] = value;
    // Increment the count
    count++;
  };

  // Takes the newest-added item off of the stack and returns that item
  someInstance.pop = function() {
    if (count > 0) { // If there are values in the stack
      // take the newest value off, hold onto it
      let value = storage[count - 1];
      delete storage[count - 1];
      // decrememt the count
      count--;
      // return the popped item
      return value;
    } else {
      // Otherwise do nothing
      return undefined;
    }
  };

  // Tells us how many items are currently in the stack
  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
