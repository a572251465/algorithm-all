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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let res = null
  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    if (root.val === val) {
      res = root
      return
    }

    dfs(root.right)
  }
  dfs(root)

  return res
}
