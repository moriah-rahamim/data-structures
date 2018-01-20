var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  _.extend(tree, bstMethods);

  return tree;
};

var bstMethods = {

  insert: function(value) {
    // do nothing if value is equal to this node's value
    if (this.value !== value) {
      var side;
      if (value > this.value) {
        // if value is greater than the current node's value
        side = 'right';
      } else if (value < this.value) {
        // if value is less than the current node's value
        side = 'left';
      }

      // check if this node has a child on that side
      if (this[side] === null) {
        // if no - add this new value as a child on that side
        var newNode = BinarySearchTree(value);
        this[side] = newNode;
      } else {
        // if yes - recurse on that side's child
        this[side].insert(value);
      }
    }
  },

  contains: function(value) {

  },

  depthFirstLog: function(callback) {

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 
