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

  let length = 0,
    p = head
  while (p) {
    length += 1
    p = p.next
  }

  p = head
  for (let i = 1; i < length - k + 1; i += 1) p = p.next

  return p.val
}
