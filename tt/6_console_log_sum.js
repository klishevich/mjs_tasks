// What will the code below output? Explain your answer.
// console.log(0.1 + 0.2);

// const a = 0.1;
// const b = 0.2;
// const c = a + b;
// console.log(c);

// console.log(0.1 + 0.2 == 0.3);

function areTheNumbersAlmostEqual(num1, num2) {
    return Math.abs( num1 - num2 ) < Number.EPSILON;
}
console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));