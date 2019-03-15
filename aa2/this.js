// ({
//   method: function() {
//     (
//       function() {
//         console.log(this);
//       }
//     )();
//   }
// }).method();

const a = {
  method: function() {
    (
      function() {
        console.log(this);
      }
    )();
  }
}

console.log(a);