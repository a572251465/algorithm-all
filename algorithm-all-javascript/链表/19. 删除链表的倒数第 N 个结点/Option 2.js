/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return null

  const dummyHead = new ListNode(-1, head)
  let len = 0,
    p = dummyHead

  while (p) {
    len += 1
    p = p.next
  }

  p = dummyHead
  for (let i = 1; i < len - n; i += 1) p = p.next

  p.next = p.next.next

  return dummyHead.next
}
