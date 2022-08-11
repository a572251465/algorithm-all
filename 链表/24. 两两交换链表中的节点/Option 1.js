/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) return head

  // 1. 将两个元素理解为一个整体
  // 2. 两个元素各自交换各自的
  const headAfter = head.next
  const newHead = swapPairs(headAfter.next)

  headAfter.next = head
  head.next = newHead

  return headAfter
}
