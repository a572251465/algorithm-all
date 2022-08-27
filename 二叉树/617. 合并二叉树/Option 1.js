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
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null || root2 === null) return root1 || root2

  const dfs = (r1, r2) => {
    if (r1 === null && r2 === null) return null

    const val = (r1 ? r1.val : 0) + (r2 ? r2.val : 0)
    const root = new TreeNode(val)

    root.left = dfs(r1 ? r1.left : null, r2 ? r2.left : null)
    root.right = dfs(r1 ? r1.right : null, r2 ? r2.right : null)
    return root
  }
  return dfs(root1, root2)
}
