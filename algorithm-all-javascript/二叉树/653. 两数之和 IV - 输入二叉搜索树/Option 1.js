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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  if (root === null) return false

  const hasTable = []
  let flags = false
  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    if (flags) return
    if (hasTable.includes(root.val)) {
      flags = true
      return
    }
    hasTable.push(k - root.val)

    dfs(root.right)
  }

  dfs(root)

  return flags
}
