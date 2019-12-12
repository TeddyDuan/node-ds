const MergeSort = require('./MergeSort');

const arries = require('../data');

for (const array of arries) {
  MergeSort.sort(array);
  console.log(...array.map((element) => element.val));
}
