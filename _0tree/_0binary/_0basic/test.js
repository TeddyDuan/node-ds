const build = require('./BuildTreeByArray');

const arries = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [0, 1, 2, undefined, 4, 5, 6, undefined, undefined, 9, undefined, 11, 12],
];

for (const array of arries) {
  console.log(...array);
  const tree = build(array);

  /* console.log('preOrder');
  tree.preOrder(tree.root);
  console.log('preOrderNR');
  tree.preOrderNR(tree.root); */

  /* console.log('inOrder');
  tree.inOrder(tree.root);
  console.log('inOrderNR');
  tree.inOrderNR(tree.root); */

  console.log('postOrder');
  tree.postOrder(tree.root);
  console.log('postOrderNR');
  tree.postOrderNR(tree.root);
}
