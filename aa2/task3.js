function rle(str) {
  let newStr = '';
  let prevLetter = '';
  let count = 1;
  str.split('').forEach(letter => {
    if (prevLetter === letter) {
      count++;
    } else {
      const addStr = count > 1 ? prevLetter + count : prevLetter;
      newStr += addStr;
      count = 1;
    }
    prevLetter = letter;
  });
  const addStr = count > 1 ? prevLetter + count : prevLetter;
  newStr += addStr;
  console.log(newStr);
}

rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');
