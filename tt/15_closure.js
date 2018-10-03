// function first() {
//     var a = 0;
//     return function () {
//         return a++;
//     }
// }

// const pp = first();
// console.log(pp());
// console.log(pp());
// console.log(pp());

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +//123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar = " + globalVar);//xyz
    
    })(456);
})(123);
