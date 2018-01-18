class Stack {
  
  constructor() {
    // set properties for count and storage
    this.count = 0;
    this.storage = {};
  }

  // add new item to top of stack
  push(item) {
    // add item to top of stack, increment the count
    this.storage[this.count] = item;
    this.count++;
  }

  // remove item from top of stack, return it
  pop() {
    if (this.count > 0) {
      // remove item from top of stack, hold onto it
      let item = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      // decrement count, return the item
      this.count--;
      return item;
    } else {
      return undefined;
    }
  }

  // return size of current stack
  size() {
    return this.count;
  }

}