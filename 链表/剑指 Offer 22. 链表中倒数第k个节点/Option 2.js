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

  let len = 0,
    p = head

  while (p) {
    len += 1
    p = p.next
  }

  p = head
  let i = 1
  for (; i < len - k + 1; i += 1) p = p.next

  return p
}
