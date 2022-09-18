/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const genTree = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd || postStart > postEnd) return null;

    const rootVal = postorder[postEnd];
    const middleIndex = inorder.findIndex((item) => item === rootVal);
    const root = new TreeNode(rootVal);
    const leftLen = middleIndex - inStart;

    root.left = genTree(
      inStart,
      middleIndex - 1,
      postStart,
      postStart + leftLen - 1
    );
    root.right = genTree(
      middleIndex + 1,
      inEnd,
      postStart + leftLen,
      postEnd - 1
    );
    return root;
  };
  return genTree(0, inorder.length - 1, 0, postorder.length - 1);
};
