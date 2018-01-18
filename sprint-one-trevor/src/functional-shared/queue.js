var Queue = function() {
  var newQueue = {};
  newQueue.storage = {};
  newQueue.newest = 0;
  newQueue.oldest = 0;

  _.extend(newQueue, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var queueMethods = {
  enqueue: function (val) {    
    this.storage[this.newest] = val;
    this[this.storage[this.newest]] = this.storage;
    this.newest ++;

  },
  dequeue: function () {
    var val = this.storage[this.oldest];
    delete this[this.storage[val]];
    this.oldest ++;
    return val;

  },
  size: function () {
    return this.newest - this.oldest < 0 ? 0 : this.newest - this.oldest;
  }
};


