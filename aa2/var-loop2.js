// var i = 10;
// const f = function() {
//   return i + i;
// }
// i--
// console.log(f());

var i = 10;
var array = [];

while (i--) {
  array.push(function() {
    return i + i;
  });
}

// console.log(array);

console.log([
  array[0](),
  array[1](),
])
