var Stack = function() {
  this.storage = {};
  this.count = 0;
  

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(val) {
  this.count++;
  this.storage[this.count] = val;
  this[this.storage[this.count]] = this.storage[this.count];
};

Stack.prototype.pop = function() {
  var val = this.storage[this.count];
  delete this[this.storage[this.count]];
  this.count--;
  return val;
};

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};

var stack = new Stack();