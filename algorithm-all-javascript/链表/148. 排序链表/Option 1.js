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

const merge = (head1, head2) => {
  const dummyHead = new ListNode(-1)
  let l1 = head1,
    l2 = head2,
    p = dummyHead

  while (l1 && l2) {
    const val1 = l1.val,
      val2 = l2.val
    if (val1 < val2) {
      p.next = l1
      l1 = l1.next
      p = p.next
    } else {
      p.next = l2
      l2 = l2.next
      p = p.next
    }
  }

  if (l1) p.next = l1
  if (l2) p.next = l2

  return dummyHead.next
}

var sortList = function (head) {
  if (head === null || head.next === null) return head

  let fast = head,
    slow = head,
    prev = null
  while (fast && fast.next) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }

  fast = head
  prev.next = null

  return merge(sortList(fast), sortList(slow))
}
