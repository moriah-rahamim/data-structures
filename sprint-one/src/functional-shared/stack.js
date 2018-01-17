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
  push: function() {
    this.count++;
  },

  pop: function() {
    if (this.count > 0) {
      this.count--;
    }
  },
  
  size: function() {
    return this.count;
  }
};


