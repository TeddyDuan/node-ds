const Element = require('../Element');
const Tree = require('./Tree');

/**
 * 基于数组建树，从0开始: k的左子下标为2k+1, 右子为2k+2
 */
module.exports = function(arr) {
  if (arr && arr.length > 0 && arr[0] !== undefined && arr[0] !== null) {
    const elements = arr.map((val) =>
      val !== undefined && val !== null ? new Element(val) : null,
    );

    for (let i = 0, k = 2 * i + 1, l = elements.length; k < l; k = 2 * i + 1) {
      const el = elements[i];
      if (el) {
        if (k === l - 1) {
          el.left = elements[k];
          break;
        }

        el.left = elements[k];
        el.right = elements[k + 1];
      }
      i++;
    }

    return new Tree(elements[0]);
  }

  return null;
};
