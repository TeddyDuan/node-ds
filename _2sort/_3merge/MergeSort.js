const AbstractSort = require('../AbstractSort');

const DO_SORT = Symbol.for('Sort#doSort');
const DO_MERGE = Symbol('Sort#Merge_doMerge');

module.exports = class MergeSort extends AbstractSort {
  static [DO_SORT](arr, left, right) {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      this[DO_SORT](arr, left, middle); // 左侧有序
      this[DO_SORT](arr, middle + 1, right); // 右侧有序

      this[DO_MERGE](arr, left, middle, right); // 左右归并
    }
  }

  static [DO_MERGE](arr, left, middle, right) {
    const temp = [];

    let l = left;
    let r = middle + 1;
    while (l <= middle && r <= right) {
      if (arr[l].compareTo(arr[r]) < 0) {
        temp.push(arr[l++]);
      } else {
        temp.push(arr[r++]);
      }
    }

    while (l <= middle) {
      temp.push(arr[l++]);
    }
    while (r <= right) {
      temp.push(arr[r++]);
    }

    for (let i = 0; i + left <= right; ++i) {
      arr[i + left] = temp[i];
    }
  }
};
