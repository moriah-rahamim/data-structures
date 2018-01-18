class Queue {

  constructor() {
    // set properties for count, startPosition, and storage
    this.count = 0;
    this.startPosition = 0;
    this.storage = {};
  }

  // add new item to back of queue
  enqueue(item) {
    this.storage[this.startPosition + this.count] = item;
    this.count++;
  }

  // remove item from front of queue, return it
  dequeue() {
    if (this.count > 0) {
      // remove item from front, hold onto it
      let item = this.storage[this.startPosition];
      delete this.storage[this.startPosition];

      // increment startPosition, decrement count
      this.startPosition++;
      this.count--;

      // return the item
      return item;

    } else {
      return undefined;
    }
  }

  // return size of queue
  size() {
    return this.count;
  }

}
