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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false

  const stack = [{ root, targetSum: targetSum - root.val }]
  while (stack.length > 0) {
    const item = stack.shift()
    const { root, targetSum } = item
    if (root.left === null && root.right === null) {
      if (targetSum === 0) return true
      continue
    }

    if (root.left)
      stack.push({ root: root.left, targetSum: targetSum - root.left.val })
    if (root.right)
      stack.push({ root: root.right, targetSum: targetSum - root.right.val })
  }

  return false
}
