var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var oldest = 0;
  var newest = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newest] = value;
    someInstance[newest] = storage;    
    newest++;
  };

  someInstance.dequeue = function() {    
    var val = storage[oldest];
    delete someInstance[storage[oldest]];
    oldest++;
    return val;
  };

  someInstance.size = function() {
    return newest - oldest < 0 ? 0 : newest - oldest;
  };
  return someInstance;
};
