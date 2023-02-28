/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  const set = new Set()
  const arr = [root]

  while (arr.length > 0) {
    const item = arr.shift()
    set.add(item.val)
    if (item.left) arr.push(item.left)
    if (item.right) arr.push(item.right)
  }

  return [...set].length
}
