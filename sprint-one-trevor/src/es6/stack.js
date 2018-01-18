class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }
  push(val) {
    this.count++;
    this.storage[this.count] = val;
    this[this.storage[this.count]] = this.storage[this.count];
  }
  pop() {
    var val = this.storage[this.count];
    delete this[this.storage[this.count]];
    this.count--;
    return val;
  }
  size() {
    return this.count < 0 ? 0 : this.count;
  }

}