var Queue = function() {
  var someInstance = {
    count: 0,
    startPosition: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(item) {
    this.count++;
  },

  dequeue: function() {
    if (this.count > 0) {
      this.count--;
    }
  },

  size: function() {
    return this.count;
  }
};


