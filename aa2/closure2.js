var a = 1;

function getFunc() {
  var a = 2;

  var func = new Function('', 'alert(a)');

  return func;
}

getFunc()(); // 1, из window
