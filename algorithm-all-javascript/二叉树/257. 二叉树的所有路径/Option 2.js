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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const stack = [{ root, arr: [root.val] }]

  const res = []
  while (stack.length > 0) {
    const item = stack.shift()
    const { root, arr } = item
    if (root.left === null && root.right === null) {
      res.push(arr.join('->'))
      continue
    }

    if (root.left) stack.push({ root: root.left, arr: [...arr, root.left.val] })
    if (root.right)
      stack.push({ root: root.right, arr: [...arr, root.right.val] })
  }

  return res
}
