var array = [10,15,20,25,30,35];

function onlyEven (el, index, array) {
  return !(el%2);
};
array.filter(onlyEven);

var array = ['return', 'phrases', 'with one word'];
function onlyOneWord (el, index, array) {
  return el.split(" ").length === 1;
};

array.filter(onlyOneWord);

var matrix = [[1, 10,-100],
              [2,-20, 200],
              [3, 30, 300]];
function positiveRowsOnly (el, index, array) {
  return el[index][index] > 0;
};

array.filter(positiveRowsOnly);

function allSameVowels (array) {

};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};