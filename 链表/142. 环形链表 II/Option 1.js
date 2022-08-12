/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) return null

  let fast = head,
    slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) break
  }

  if (fast !== slow) return null

  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }

  return fast
}
