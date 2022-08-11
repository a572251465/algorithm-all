/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let prev = 0
  const dummyHead = new ListNode(-1)
  p = dummyHead

  const addMerge = (l1, l2) => {
    if (l1 === null && l2 === null) return

    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0

    let add = val1 + val2 + prev
    prev = (add / 10) | 0
    add = add % 10

    const node = new ListNode(add)
    p.next = node
    p = p.next

    addMerge(l1 ? l1.next : null, l2 ? l2.next : null)
  }
  addMerge(l1, l2)

  if (prev > 0) p.next = new ListNode(prev)

  return dummyHead.next
}
