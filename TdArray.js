module.exports = class TdArray extends Array {
  swap(a, b) {
    if (a !== b && a < this.length && b < this.length) {
      const temp = this[a];
      this[a] = this[b];
      this[b] = temp;
    }
  }
};
