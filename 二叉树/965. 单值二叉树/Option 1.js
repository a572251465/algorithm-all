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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (root === null) return true

  const left = root.left ? root.left.val : root.val
  const right = root.right ? root.right.val : root.val

  return (
    root.val === left &&
    root.val === right &&
    isUnivalTree(root.left) &&
    isUnivalTree(root.right)
  )
}
