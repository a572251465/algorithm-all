/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const val = root.val,
    diff1 = val - p.val,
    diff2 = val - q.val

  if (diff1 * diff2 <= 0) return root
  return lowestCommonAncestor(diff1 > 0 ? root.left : root.right, p, q)
}
