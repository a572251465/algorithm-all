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
  let length = 0,
    p = head

  while (p) {
    length += 1
    p = p.next
  }

  p = head
  let i = 1

  const first = k,
    last = length - k + 1

  let firstNode = null,
    lastNode = null
  while (p) {
    if (i === first) firstNode = p
    if (i === last) lastNode = p
    i += 1
    p = p.next
  }

  const temp = firstNode.val
  firstNode.val = lastNode.val
  lastNode.val = temp

  return head
}
