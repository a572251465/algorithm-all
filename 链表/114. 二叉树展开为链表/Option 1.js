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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null || root === undefined) return

  let prev = null
  const dfs = (root) => {
    if (root === null || root === undefined) return

    // todo
    const { left, right } = root
    root.left = null
    if (prev === null) {
      prev = root
    } else {
      prev.right = root
      prev = prev.right
    }

    dfs(left)
    dfs(right)
  }
  dfs(root)
}
