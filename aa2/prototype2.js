function Book() {
  this.name = 'foo'
}

Book.prototype = {
  getName: function() {
    return this.name;
  }
}

var book = new Book();

console.log(book.getName());

Book.prototype.getUpperName = function() {
  return this.getName().toUpperCase();
}

console.log(book.getUpperName());
