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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummyTree = new TreeNode(-1)
  let p = dummyTree

  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    p.right = root
    root.left = null
    p = p.right

    dfs(root.right)
  }
  dfs(root)

  return dummyTree.right
}
