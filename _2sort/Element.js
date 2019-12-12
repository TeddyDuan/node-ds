module.exports = class Element {
  constructor(val) {
    this.val = val;
  }

  compareTo(another) {
    if (this.val < another.val) return -1;
    if (this.val === another.val) return 0;
    return 1;
  }
};
