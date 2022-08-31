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
var sumRootToLeaf = function (root) {
  const res = []

  const dfs = (root, str) => {
    if (root === null) return
    str += `${root.val}`
    if (root.left === null && root.right === null) {
      res.push(str)
      return
    }

    dfs(root.left, str)
    dfs(root.right, str)
  }
  dfs(root, '')

  return res.reduce((memo, curr) => {
    memo += parseInt(curr, 2)
    return memo
  }, 0)
}
