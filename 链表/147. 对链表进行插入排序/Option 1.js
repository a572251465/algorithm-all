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
var insertionSortList = function (head) {
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-10000)
  let p = head,
    p1 = dummyHead

  // 4 2 1 3
  // -10000 < 4
  while (p) {
    const currValue = p.val

    while (p1 && p1.next && p1.next.val < currValue) {
      p1 = p1.next
    }

    const nextP = p.next
    if (p1.next) {
      const prev = p1.next
      p1.next = p
      p.next = prev
    } else {
      p1.next = p
      p1.next.next = null
    }

    p = nextP
    p1 = dummyHead
  }

  return p1.next
}
