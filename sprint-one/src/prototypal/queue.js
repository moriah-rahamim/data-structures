var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.newest = 0;
  queue.oldest = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return queue;
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.newest] = val;
    this[this.storage[this.newest]] = this.storage[this.newest];
    this.newest++;

  

  },
  dequeue: function() {
    var val = this.storage[this.oldest];
    delete this[this.storage[this.oldest]];
    this.oldest++;
    return val;

  },
  size: function() {
    return this.newest - this.oldest < 0 ? 0 : this.newest - this.oldest;

  }
  

};

var queue = Queue();

