/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  if (head === null) return -1

  let fast = head,
    slow = head
  while (k-- > 0) fast = fast.next

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow.val
}
