/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null || root2 === null) return root1 || root2

  const stack = [root1, root2]
  while (stack.length > 0) {
    const r1 = stack.shift()
    const r2 = stack.shift()
    r1.val += r2.val

    if (r1.left && r2.left) {
      stack.push(r1.left, r2.left)
    } else if (r1.left === null && r2.left) {
      r1.left = r2.left
    }

    if (r1.right && r2.right) {
      stack.push(r1.right, r2.right)
    } else if (r1.right === null && r2.right) {
      r1.right = r2.right
    }
  }

  return root1
}
