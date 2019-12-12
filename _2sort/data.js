const TdArray = require('../TdArray');
const Element = require('./Element');

const arries = [
  [8, 1, 4, 9, 0, 3, 5, 2, 7, 6].map((val) => new Element(val)),
  [8, 8, 8, 8, 8, 8, 8, 8, 8, 8].map((val) => new Element(val)),
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((val) => new Element(val)),
].map((array) => TdArray.from(array));

module.exports = arries;
