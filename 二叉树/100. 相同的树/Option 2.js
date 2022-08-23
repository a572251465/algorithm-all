/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  const stack = [p, q]
  while (stack.length > 0) {
    const p1 = stack.shift(),
      p2 = stack.shift()

    if (!p1 && !p2) continue
    if (!p1 || !p2) return false
    if (p1.val !== p2.val) return false

    stack.push(p1.left)
    stack.push(p2.left)

    stack.push(p1.right)
    stack.push(p2.right)
  }

  return true
}
