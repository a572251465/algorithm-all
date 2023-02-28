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
var sortList = function (head) {
  if (head === null || head.next === null) return head

  const merge = (l1, l2) => {
    if (l1 === null) return l2
    if (l2 === null) return l1

    const dummyHead = new ListNode(-1)
    let p = dummyHead
    while (l1 && l2) {
      const val1 = l1.val,
        val2 = l2.val
      if (val1 <= val2) {
        p.next = l1
        l1 = l1.next
      } else {
        p.next = l2
        l2 = l2.next
      }
      p = p.next
    }

    if (l1) p.next = l1
    if (l2) p.next = l2

    return dummyHead.next
  }

  let fast = head,
    slow = head,
    prev = null

  while (fast && fast.next) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }
  fast = head
  if (prev) prev.next = null

  return merge(sortList(fast), sortList(slow))
}
