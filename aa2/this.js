const a = {
  // example 1
  name: 'Awesome Name',
  method1: function() {
    console.log(this.name);
  },
  // example 2
  method2: () => {
    console.log(this.name);
  },
  // example 3
  method3: function() {
    (function() {
      console.log(this.name);
    })()
  }
}

a.method1();

// example 4
// function f2 () {
//   'use strict'; 
//   return console.log(this);
// }
// f2();
