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
 * @return {string}
 */
var tree2str = function (root) {
  let str = ''
  const dfs = (root) => {
    if (root === null) return

    str += `(${root.val}`
    dfs(root.left)

    if (root.left === null && root.right) {
      str += `()`
    }

    dfs(root.right)
    str += `)`
  }
  dfs(root)

  return str.slice(1, -1)
}
