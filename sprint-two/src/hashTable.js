

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//get(index), set(index, val), each - callback(storage[i], i, storage);
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go to the bucket at the index (bucket number)
  if (this._storage[index] === undefined) {
    this._storage[index] = [];
  }
  var bucket = this._storage[index];
  //make sure this key does not exist in bucket
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  //create a tuple (key, val) and add to bucket
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //use index to go to bucket, search until we find key
  var bucket = this._storage[index];
  //if bucket not undefined
  //search for key
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create bucket with index
  var bucket = this._storage[index];
  if (bucket !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket.splice(i, 1)[1];
      }
    }
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


