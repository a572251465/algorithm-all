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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0

  const dfs = (root) => {
    if (root.left === null && root.right === null) return 1
    const leftNum = root.left ? dfs(root.left) : Number.MAX_SAFE_INTEGER
    const rightNum = root.right ? dfs(root.right) : Number.MAX_SAFE_INTEGER

    return Math.min(leftNum, rightNum) + 1
  }
  return dfs(root)
}
