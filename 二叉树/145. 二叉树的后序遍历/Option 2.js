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
var postorderTraversal = function (root) {
  if (root === null) return []

  const stack = [],
    res = []
  let head = root,
    prev = null

  // 后序的遍历方式是：左 → 右 → 中
  // 可以理解为两条栈 以root节点为根据 分开两条
  while (stack.length > 0 || head) {
    if (head) {
      // 不断的执行left节点 直到left节点结束 同时将遍历过的节点 添加到栈中。为了right节点的遍历
      stack.push(head)
      head = head.left
    } else {
      // 获取遍历过的节点 为了方便遍历right节点
      const curr = stack.pop()
      // 这是根据 如果right节点为null的时候，当前节点就是中间节点/ 如果curr.right === prev 一定是一个回退的过程
      if (curr.right === null || curr.right === prev) {
        res.push(curr.val)
        prev = curr
        // 一直进行回退 直到出现了新的分支
        head = null
      } else {
        stack.push(curr)
        head = curr.right
      }
    }
  }

  return res
}
