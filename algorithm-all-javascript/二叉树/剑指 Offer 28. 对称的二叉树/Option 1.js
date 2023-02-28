/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true

  const isSymTree = (r1, r2) => {
    if (r1 === null && r2 === null) return true
    if (r1 === null || r2 === null) return false

    return (
      r1.val === r2.val &&
      isSymTree(r1.left, r2.right) &&
      isSymTree(r1.right, r2.left)
    )
  }
  return isSymTree(root, root)
}
