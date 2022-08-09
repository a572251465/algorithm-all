/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-1, head)
  let prev = dummyHead,
    size = left
  while (--size > 0) prev = prev.next

  let curr = prev.next
  let len = right - left + 1

  // 1 2
  let last = null,
    newHead = null
  while (len-- > 0) {
    // 1 2 3
    last = curr.next

    const temp = curr
    curr = curr.next
    temp.next = newHead
    newHead = temp
  }
  prev.next.next = last
  prev.next = newHead

  return dummyHead.next
}
