const array = [];
for (var i=0; i<10; i++) {
  array.push(function() {
    return i;
  });
}

console.log(array[0]());
console.log(array[1]());