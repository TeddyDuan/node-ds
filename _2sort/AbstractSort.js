const DO_SORT = Symbol.for('Sort#doSort');

module.exports = class AbstractSort {
  static sort(arr) {
    if (arr && arr.length > 1) this[DO_SORT](arr, 0, arr.length - 1);
  }

  static [DO_SORT]() {
    throw new Error(`请实现${DO_SORT.toString()}方法`);
  }
};
