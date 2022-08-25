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
var invertTree = function (root) {
  if (root === null) return root

  const stack = [root]
  while (stack.length > 0) {
    const item = stack.shift()
    if (item === null) continue

    const left = item.left
    item.left = item.right
    item.right = left

    stack.push(item.left)
    stack.push(item.right)
  }

  return root
}
