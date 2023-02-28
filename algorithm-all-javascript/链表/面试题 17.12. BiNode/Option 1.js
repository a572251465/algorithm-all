/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function (root) {
  if (root === null) return root

  let dummyRoot = {},
    prev = dummyRoot
  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    root.left = null
    prev.right = root
    prev = root

    dfs(root.right)
  }
  dfs(root)

  return dummyRoot.right
}
