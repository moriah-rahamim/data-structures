var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  someInstance.enqueue = function(value) {
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      count--;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
