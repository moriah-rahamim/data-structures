describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(6);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
  
  it('should store more than 2 values', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.head.value).to.equal(1);
    expect(linkedList.tail.value).to.equal(3);
    expect(linkedList.contains(2)).to.equal(true);
  });

  it('should not throw an error when removing head from an empty list', function() {
    linkedList.addToTail('a string');
    linkedList.removeHead();
    expect(function() { linkedList.removeHead(); }).not.throws();
  });

  it('should set head and tail to null when list becomes empty', function() {
    linkedList.addToTail('thing one');
    linkedList.addToTail('thing two');
    linkedList.removeHead();
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });

  it('should have same head and tail when list contains one node', function() {
    linkedList.addToTail('a thing');
    expect(linkedList.head).to.equal(linkedList.tail);
  });

});
