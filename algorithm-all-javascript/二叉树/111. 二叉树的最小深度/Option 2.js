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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0

  const stack = [{ root, level: 1 }]
  while (stack.length > 0) {
    const item = stack.shift()
    const { root, level } = item
    if (root.left === null && root.right === null) return level
1
    if (root.left) stack.push({ root: root.left, level: level + 1 })
    if (root.right) stack.push({ root: root.right, level: level + 1 })
  }

  return 0
}
