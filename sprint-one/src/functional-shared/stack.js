var Stack = function() {
  var newStack = {};
  
  newStack.storage = {};
  newStack.count = 0;

  _.extend(newStack, methods);
  
  return newStack; 
};

var methods = {
  push: function (val) {
    this.count++;
    this.storage[this.count] = val;
    this[this.storage] = this.storage[this.count];
  },
  pop: function() {
    var val = this.storage[this.count];
    delete this[this.storage[this.count]];
    this.count --;
    return val;
  },
  size: function() {
    return this.count < 0 ? 0 : this.count;
  } 
};
