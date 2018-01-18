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
    // add item to back of queue
    this.storage[this.startPosition + this.count] = item;
    // increment the count
    this.count++;
  },

  dequeue: function() {
    if (this.count > 0) {
      // take off the front item and hold onto its value
      let item = this.storage[this.startPosition];
      delete this.storage[this.startPosition];
      // decrement the count and move the start position over
      this.count--;
      this.startPosition++;
      // return the dequeue'd item
      return item;
    } else {
      return undefined;
    }
  },

  size: function() {
    return this.count;
  }
};


