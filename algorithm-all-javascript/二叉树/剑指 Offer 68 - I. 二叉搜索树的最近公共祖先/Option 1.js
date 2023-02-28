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
  if (root === null) return root

  const v = p.val
  const v1 = q.val
  while (root) {
    const r = root.val
    if ((r - v) * (r - v1) <= 0) return root

    root = r - v > 0 ? root.left : root.right
  }

  return root
}
