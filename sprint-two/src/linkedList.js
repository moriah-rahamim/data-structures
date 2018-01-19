var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
  
    if (list.head === null) {
      // base case: nothing in list (head null, tail null)
      // head = new node
      // tail = the same new node
      // new node .next is null
      list.head = node;
      list.tail = node;
    } else {
      // regular case: stuff already in list
      // old tail .next = new node
      // set new node as tail
      // new node .next points to null
      var oldTail = list.tail;
      oldTail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var head = list.head;
    
    if (head === null) {
      // if the list is already empty
      return head;
    } else if (head.next === null) {
      // if this is the only item in the list
      list.head = null;
      list.tail = null;
    } else {
      list.head = head.next;
    }
    return head.value;
  };

  list.contains = function(target) {
    var node = list.head;

    // while node is not null
    while (node !== null) {
      // check if this is the target
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
