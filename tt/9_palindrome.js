// Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.
// function palindrome(str) {
//     const len = str.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (str[i] !== str[len - 1 - i]) return false;
//     }
//     return true;
// }

// console.log(palindrome('aasdsaad'));

function isPalindrome(str) {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome('aa ,sdsaa'));
