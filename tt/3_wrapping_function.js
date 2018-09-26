// Why this does not work?
const testFunc =  function () {
    return 'test func result';
}

(function($) {
    console.log($());
} )(testFunc);
