/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isCorrTree = (p1, p2) => {
    if (p1 === null && p2 === null) return true
    if (p1 === null || p2 === null) return false

    return (
      p1.val === p2.val &&
      isCorrTree(p1.left, p2.right) &&
      isCorrTree(p1.right, p2.left)
    )
  }

  return isCorrTree(root.left, root.right)
}
