/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let res = [],
    res1 = []

  const dfs = (root, res) => {
    if (root === null) return
    if (root.left === null && root.right === null) {
      res.push(root.val)
      return
    }

    dfs(root.left, res)
    dfs(root.right, res)
  }
  dfs(root1, res)
  dfs(root2, res1)

  return res.toString() === res1.toString()
}
