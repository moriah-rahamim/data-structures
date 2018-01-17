var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var nextKey = Object.keys(storage).length;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
    someInstance[count] = storage;
  };

  someInstance.dequeue = function() {
    var val = storage[1];
    delete someInstance[1];
    count--;
    return val;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
