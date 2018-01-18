class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.newest = 0;
    this.oldest = 0;
  }

  enqueue(val) {
    this.storage[this.newest] = val;
    this[this.storage[this.newest]] = this.storage[this.newest];
    this.newest++;
  }
  dequeue() {
    var val = this.storage[this.oldest];
    delete this[this.storage[this.oldest]];
    this.oldest++;
    return val;
  }
  size() {
    return this.newest - this.oldest < 0 ? 0 : this.newest - this.oldest;
  }

}
