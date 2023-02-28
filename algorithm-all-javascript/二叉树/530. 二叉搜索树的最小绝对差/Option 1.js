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
var getMinimumDifference = function (root) {
  let res = Infinity,
    prev = -Infinity

  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    if (prev === -Infinity) {
      prev = root.val
    } else {
      const diff = root.val - prev
      res = Math.min(res, diff)
      prev = root.val
    }

    dfs(root.right)
  }
  dfs(root)

  return res
}
