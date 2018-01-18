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
    list.head = list.tail;
    return head.value;
    
  };

  list.contains = function(target) {
    return list.head.value === target || list.tail.value === target;
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
