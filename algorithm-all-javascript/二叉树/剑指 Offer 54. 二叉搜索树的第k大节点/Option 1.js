/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res

  const dfs = (root) => {
    if (root === null) return

    dfs(root.right)
    if (--k === 0) {
      res = root.val
    }
    dfs(root.left)
  }

  dfs(root)

  return res
}
