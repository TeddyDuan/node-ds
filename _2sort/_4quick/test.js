const QuickSort = require('./QuickSort');

const arries = require('../data');

for (const array of arries) {
  QuickSort.sort(array);
  console.log(...array.map((element) => element.val));
}
