// What is NaN? What is its type? How can you reliably test if a value is equal to NaN?
// console.log(typeof NaN);
const a = parseInt('12');
// console.log(a);
if (Number.isNaN(a)) {
    console.log('NaN!!!');
}
