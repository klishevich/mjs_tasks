/**
Напишите функцию sum, которая умеет складывать числа. Пример работы:
sum(1); // => console: 1
sum(1)(2)(3); // => console: 1 3 6

*/

function sum(number) {
    let res = number;
    console.log(res);
    // Код функции здесь
    const f1 = (num) => {
        res += num;
        console.log(res);
        return f1;
    }
    return f1;
}

console.log(sum(1));
console.log(sum(1)(2)(3));
