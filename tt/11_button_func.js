// Consider the following code snippet:
for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', function(){ console.log(i); });
  document.body.appendChild(btn);
}
// (a) What gets logged to the console when the user clicks on “Button 4” and why?

// (b) Provide one or more alternate implementations that will work as expected.

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', (function(i) {
//     return function() { console.log(i); };
//   })(i));
//   document.body.appendChild(btn);
// }
// Alternatively, you could wrap the entire call to btn.addEventListener in the new anonymous function:

// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   (function (i) {
//     btn.addEventListener('click', function() { console.log(i); });
//   })(i);
//   document.body.appendChild(btn);
// }
// Or, we could replace the for loop with a call to the array object’s native forEach method:

// ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function() { console.log(i); });
//   document.body.appendChild(btn);
// });
// Lastly, the simplest solution, if you’re in an ES6/ES2015 context, is to use let i instead of var i:

// for (let i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }