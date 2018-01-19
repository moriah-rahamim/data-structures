

// Instantiate a new graph
var Graph = function() {
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  //create an obj whose value is the value
  var node = {};  
  node.value = value;
  node.edges = {};
  //add that object as a property of this with key = value
  this[value] = node;
  
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  //check if that value has a key:value in the graph  
  if (this[value]) {    
    return true;
  } else {
    return false;
  }  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  //go through every edge in this nodes edges
  //for each edge
  //  remove this edge from the other's nodes edges object
  for (var key in this[value].edges) {
    delete this[key].edges[value];
  }
  // remove the node from the graph
  delete this[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check fromNode's edges property to see if it has an edge to toNode
  return this[fromNode].edges[toNode] !== undefined;
  // should not need to do the reverse because it would yield same result
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // check if graph contains both the fromNode and the toNode
  if (this.contains(fromNode) && this.contains(toNode)) {
    //set edge reference between both nodes(bi-directional)
    this[fromNode].edges[this[toNode].value] = this[toNode].value;
    this[toNode].edges[this[fromNode].value] = this[fromNode].value;

    // return true if successful
    return true;
  }

  // return false if not successful
  return false;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // make sure both nodes exist in the graph
  if (this.contains(fromNode) && this.contains(toNode)) {
    // delete the edge from the fromNode edges
    delete this[fromNode].edges[toNode];
    // delete it from the toNode edges
    delete this[toNode].edges[fromNode];
    // note: delete will fail gracefully and return false if the edge didn't exist
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


