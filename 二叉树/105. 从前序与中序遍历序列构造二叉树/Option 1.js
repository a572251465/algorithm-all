/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const genTree = (preStart, preEnd, inStart, inEnd) => {
    if (preStart > preEnd || inStart > inEnd) return null;

    const rootVal = preorder[preStart];
    const middleIndex = inorder.findIndex((item) => item === rootVal);

    const root = new TreeNode(rootVal);
    const leftLen = middleIndex - inStart;
    root.left = genTree(
      preStart + 1,
      preStart + leftLen,
      inStart,
      middleIndex - 1
    );
    root.right = genTree(
      preStart + leftLen + 1,
      preEnd,
      middleIndex + 1,
      inEnd
    );
    return root;
  };

  return genTree(0, preorder.length - 1, 0, inorder.length - 1);
};
