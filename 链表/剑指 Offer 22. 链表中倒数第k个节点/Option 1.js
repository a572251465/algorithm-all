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
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (head === null) return head

  let fast = head,
    slow = head

  // 1 => 2 => 3 => 4 => 5  k = 2
  // 1 => 2 => 3 => 4 => 5  k = 1
  // 1 => 2 => 3 => 4 => 5  k = 5
  while (--k > 0) fast = fast.next

  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  return slow
}
