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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (root === null) return []

  const res = [],
    stack = []
  let head = root
  while (stack.length > 0 || head) {
    if (head) {
      res.push(head.val)
      if (head.right) stack.push(head.right)
      head = head.left
    } else {
      const item = stack.pop()
      head = item
    }
  }

  return res
}
