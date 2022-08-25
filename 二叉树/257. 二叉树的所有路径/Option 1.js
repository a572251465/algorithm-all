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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  const dfs = (root, str) => {
    if (root === null) return
    if (root.left === null && root.right === null) {
      str += root.val
      res.push(str)
      return
    }

    dfs(root.left, `${str}${root.val}->`)
    dfs(root.right, `${str}${root.val}->`)
  }

  dfs(root, '')
  return res
}
