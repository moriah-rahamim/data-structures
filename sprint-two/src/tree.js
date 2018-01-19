var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree with value
  //add newtree as a child of this
  var newTree = Tree(value);
  this.children.push(newTree);
  
  
};

treeMethods.contains = function(target) {
  //first check if the current tree matches target
  if (this.value === target) {
    return true;
  }
  //create a var isFound = false
  var isFound = false;
  for (var i = 0; i < this.children.length; i++) {
    //if not : recursively call contains on each of its children
    isFound = isFound || this.children[i].contains(target);
  }
  //and return result of that, if one contains true, return true;
  return isFound;
};



/*
 * Complexity: What is the time complexity of the above functions?
   addChild = O(1);
   contains = O(n);
 */
