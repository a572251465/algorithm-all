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
var inorderTraversal = function (root) {
  if (root === null) return []

  const res = [],
    stack = []
  // 表示遍历的每个节点 可以理解为每个子树的中间节点
  let curr = root

  while (stack.length > 0 || curr !== null) {
    if (curr) {
      stack.push(curr)
      // 不断的遍历左子树。遇到左子树就开始遍历
      curr = curr.left
    } else {
      // 获取最后一个左子树
      const pre = stack.pop()
      res.push(pre.val)
      // 遍历右子树
      curr = pre.right
    }
  }

  return res
}
