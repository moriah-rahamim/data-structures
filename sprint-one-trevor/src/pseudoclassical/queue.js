var Queue = function() {
  this.storage = {};
  this.oldest = 0;
  this.newest = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.newest] = val;
  this[this.storage[this.newest]] = this.storage[this.newest];
  this.newest++;

};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.oldest];
  delete this[this.storage[this.oldest]];
  this.oldest++;
  return val;

};

Queue.prototype.size = function() {
  return this.newest - this.oldest < 0 ? 0 : this.newest - this.oldest;
};



var queue = new Queue();

