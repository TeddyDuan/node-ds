const ROOT = Symbol('tree#root');

class Tree {
  constructor(root) {
    this[ROOT] = root;
  }

  get root() {
    return this[ROOT];
  }

  preOrder(el) {
    if (el) {
      console.log(el.val);
      this.preOrder(el.left);
      this.preOrder(el.right);
    }
  }

  inOrder(el) {
    if (el) {
      this.inOrder(el.left);
      console.log(el.val);
      this.inOrder(el.right);
    }
  }

  postOrder(el) {
    if (el) {
      this.postOrder(el.left);
      this.postOrder(el.right);
      console.log(el.val);
    }
  }

  /**
   * 以下为非递归实现
   */

  preOrderNR(el) {
    const s = [];

    let now = el;
    while (now || s.length > 0) {
      while (now) {
        console.log(now.val); // 遍历当前节点;
        s.push(now);
        now = now.left;
      }

      if (s.length > 0) {
        now = s.pop(); // 当前节点和左侧已遍历, 遍历右侧
        now = now.right;
      }
    }
  }

  inOrderNR(el) {
    const s = [];

    let now = el;
    while (now || s.length > 0) {
      while (now) {
        s.push(now);
        now = now.left; // 一路向左
      }

      if (s.length > 0) {
        now = s.pop();
        console.log(now.val); // 左节点为空/已遍历，遍历当前节点并出栈，然后遍历右侧。
        now = now.right;
      }
    }
  }

  postOrderNR(el) {
    const s = [];

    let now = el;
    while (now || s.length > 0) {
      while (now) {
        s.push(now);
        now = now.left; // 初始逻辑和中序保持一致，一路向左
      }

      if (s.length > 0) {
        now = s.pop();
        if (now.rightVisited) {
          console.log(now.val); // 如果右侧已被遍历，则遍历当前节点。
          delete now.rightVisited; // 删除当前节点的右侧访问标记。
          now = undefined; // 保证下一次迭代正常进行。
        } else {
          s.push(now); // 右侧未被遍历，当前节点仍需压入堆栈。
          now.rightVisited = true;
          now = now.right;
        }
      }
    }
  }
}

module.exports = Tree;
