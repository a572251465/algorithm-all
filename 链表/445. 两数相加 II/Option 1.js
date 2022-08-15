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
  if (l1 === null || l2 === null) return l1 || l2

  const reversal = (head) => {
    if (head === null || head.next === null) return head

    let p = head,
      newHead = null
    while (p) {
      const temp = p
      p = p.next
      temp.next = newHead
      newHead = temp
    }

    return newHead
  }

  let prevSum = 0
  const dummyHead = new ListNode(-1)
  p = dummyHead
  const depth = (l1, l2) => {
    if (l1 === null && l2 === null) {
      if (prevSum > 0) {
        p.next = new ListNode(prevSum, p.next || null)
      }
      return
    }

    const val1 = l1 ? l1.val : 0,
      val2 = l2 ? l2.val : 0

    let sum = val1 + val2 + prevSum
    prevSum = (sum / 10) | 0
    sum %= 10

    p.next = new ListNode(sum, p.next || null)

    depth(l1 ? l1.next : null, l2 ? l2.next : null)
  }

  depth(reversal(l1), reversal(l2))

  return dummyHead.next
}
