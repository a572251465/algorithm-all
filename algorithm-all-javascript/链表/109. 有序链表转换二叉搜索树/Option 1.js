/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head === null) return null

  const arr = []
  let p = head
  while (p) {
    arr.push(p.val)
    p = p.next
  }

  const genTree = (left, right) => {
    if (left > right) return null
    const center = left + (((right - left) / 2) | 0)

    const tree = new TreeNode(arr[center])
    tree.left = genTree(left, center - 1)
    tree.right = genTree(center + 1, right)
    return tree
  }
  return genTree(0, arr.length - 1)
}
