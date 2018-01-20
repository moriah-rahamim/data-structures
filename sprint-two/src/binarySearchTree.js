var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;

  _.extend(tree, bstMethods);

  return tree;
};

var bstMethods = {

  getSide: function(value) {
    if (value === this.value) {
      return 'equal';
    } else if (value > this.value) {
      // if value is greater than the current node's value
      return 'right';
    } else {
      // if value is less than the current node's value
      return 'left';
    }
  },

  insert: function(value) {
    var side = this.getSide(value);
    // do nothing if value is equal to this node's value
    if (side !== 'equal') {
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
    var side = this.getSide(value);
    // BASE CASES:
    // if current node = value
    if (side === 'equal') {
      return true;
    }
    // if the child on that side is null
    if (this[side] === null) {
      return false;
    }

    // RECURSIVE CASE:
    // recurse whatever side we have set
    return this[side].contains(value);
  },

  depthFirstLog: function(callback) {
    // execute callback on this node
    callback(this.value);

    // check if node has left child
    if (this.left !== null) {
      // if so, recurse on left child
      this.left.depthFirstLog(callback);
    }
    // check if node has right child
    if (this.right !== null) {
      // if so, recurse on right child
      this.right.depthFirstLog(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Assuming a self-balancing tree, it would be:
  * insert: O(log n)
  * contains: O(log n)
  * depthFirstLog: O(n)
 * Assuming a non-self-balancing tree, the actual worst case is:
  * insert: O(n)
  * contains: O(n)
  * depthFirstLog: O(n)
 * this is not self-balancing so technically all operations here are O(n)
 */
 
