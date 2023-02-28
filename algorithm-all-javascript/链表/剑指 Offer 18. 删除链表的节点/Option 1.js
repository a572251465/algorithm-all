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
  if (head === null) return head

  const dummyHead = new ListNode(-1, head)
  let p = dummyHead

  while (p && p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
      return dummyHead.next
    }
    p = p.next
  }

  return head
}
