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
var oddEvenList = function (head) {
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-1)
  let p = head,
    p1 = dummyHead,
    prev = null
  while (p && p.next) {
    p1.next = p.next
    p1 = p1.next
    p.next = p.next.next
    prev = p
    p = p.next
  }

  p1.next = null
  p = p || prev
  p.next = dummyHead.next

  return head
}
