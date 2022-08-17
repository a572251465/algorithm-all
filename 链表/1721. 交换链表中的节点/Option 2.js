/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let fast = head,
    slow = head,
    firstNode = null,
    n = k

  while (n-- > 1) fast = fast.next
  firstNode = fast

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next
  }

  const temp = firstNode.val
  firstNode.val = slow.val
  slow.val = temp

  return head
}
