function multiplyBy10 (array) {
 // your code here
};

function shiftRight (array) {
 return array.map(function(val, index, arr) {
  return arr[index-1] || arr[arr.length-1];
 });
}

function onlyVowels (array) {
 // your code here
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};