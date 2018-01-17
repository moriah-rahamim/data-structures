var Stack = function() {
  var newStack = {};

  extend(newStack, stackMethods);
  

};

var stackMethods = {};

Stack.stackMethods.push = function () {

};

Stack.stackMethods.push = function () {

};

Stack.stackMethods.size = function () {

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};