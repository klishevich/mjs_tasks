// Write a sum method which will work properly when invoked using either syntax below.
function sum(a, b) {
    if (typeof b === 'undefined') {
        return (bb) => (a + bb);
    }
    return a + b;
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
