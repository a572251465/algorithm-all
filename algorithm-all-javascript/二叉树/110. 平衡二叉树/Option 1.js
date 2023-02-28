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
var isBalanced = function (root) {
  const dfs = (root) => {
    if (root === null) return 0

    const leftH = dfs(root.left)
    const rightH = dfs(root.right)
    if (leftH === false || rightH === false) return false
    if (Math.abs(leftH - rightH) > 1) return false

    return Math.max(leftH, rightH) + 1
  }

  return dfs(root) !== false
}
