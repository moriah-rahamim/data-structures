var Stack = function() {
  var someInstance = {
    count: 0,
    storage: {}
  };

  // assign all methods in stackMethods as methods of someInstance
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(item) {
    // add new item onto top of the stack
    this.storage[this.count] = item;
    // increment the count
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      // take top item off the stack and hold onto its value
      let poppedItem = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      // decrement the count
      this.count--;
      // return the item
      return poppedItem;
    } else {
      // otherwise do nothing
      return undefined;
    }
  },
  
  size: function() {
    return this.count;
  }
};


