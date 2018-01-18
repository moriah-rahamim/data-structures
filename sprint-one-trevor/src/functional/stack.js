var Stack = function() {
  var someInstance = {};
 
  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var nextKey = Object.keys(storage).length;
  // Implement the methods below
  someInstance.push = function(value) { 
    count ++;
    storage[count] = value;
    someInstance[count] = storage;    
  };

  someInstance.pop = function() {
    var val = storage[count];
    delete someInstance[storage[count]];
    count --;
    return val;
  };

  someInstance.size = function() {    
    return count < 0 ? 0 : count;
  };

  return someInstance;
  
};
