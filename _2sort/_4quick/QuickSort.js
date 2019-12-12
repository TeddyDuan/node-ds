const AbstractSort = require('../AbstractSort');

const DO_SORT = Symbol.for('Sort#doSort');
const PICK_PIVOT = Symbol('Sort#Quick_pickPivot');

module.exports = class QuickSort extends AbstractSort {
  static [DO_SORT](arr, left, right) {
    if (left < right) {
      // 处理轴点
      this[PICK_PIVOT](arr, left, right);

      if (right - left > 2) {
        /**
         * 待优化：当数组大小过小时，没有必要采用快速排序，使用简单排序即可。
         */
        let i = left;
        let j = right - 1;
        const pivot = arr[j];
        for (;;) {
          /* eslint-disable */
          while (arr[++i].compareTo(pivot) < 0) {}
          while (arr[--j].compareTo(pivot) > 0) {}
          /* eslint-enable */

          if (i < j) {
            arr.swap(i, j); // 交换i, j
          } else {
            arr.swap(i, right - 1); // 交换碰撞点和轴点。
            break;
          }
        }

        this[DO_SORT](arr, left, i - 1);
        this[DO_SORT](arr, i + 1, right);
      }
    }
  }

  /**
   * 采用左/中/右三点的中值作为轴点；
   * 三点排序后，将轴点放置在右侧-1。
   * @param {TdArray} arr
   * @param {number} left
   * @param {number} right
   */
  static [PICK_PIVOT](arr, left, right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[left].compareTo(arr[middle]) > 0) {
      arr.swap(left, middle);
    }

    if (arr[left].compareTo(arr[right]) > 0) {
      arr.swap(left, right);
    }
    if (arr[middle].compareTo(arr[right]) > 0) {
      arr.swap(middle, right);
    }

    arr.swap(middle, right - 1);
  }
};
