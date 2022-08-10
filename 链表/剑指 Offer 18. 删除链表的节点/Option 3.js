/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next

  let prev = head,
    curr = head.next

  while (curr && curr.val !== val) {
    prev = curr
    curr = curr.next
  }

  if (curr) prev.next = curr.next

  return head
}
