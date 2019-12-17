const VAL = Symbol('element#val');

class Element {
  constructor(val, left, right) {
    this[VAL] = val;
    if (left) this.left = left;
    if (right) this.right = right;
  }

  get val() {
    return this[VAL];
  }

  set val(v) {
    if (v !== undefined && v !== null) this[VAL] = v;
  }

  compareTo(another) {
    if (this.val < another.val) return -1;
    if (this.val === another.val) return 0;
    return 1;
  }
}

module.exports = Element;
