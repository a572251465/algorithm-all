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
  const dummyHead = new ListNode(-1)
  p = dummyHead

  const reversal = (head) => {
    if (head === null || head.next === null) return head

    const newHead = reversal(head.next)
    head.next.next = head
    head.next = null
    return newHead
  }

  let sum = 0
  const dfs = (l1, l2) => {
    if (l1 === null && l2 === null) return

    const val1 = l1 ? l1.val : 0,
      val2 = l2 ? l2.val : 0
    sum = sum + val1 + val2
    const surplus = sum % 10
    sum = (sum / 10) | 0
    p.next = new ListNode(surplus, p.next)

    dfs(l1 ? l1.next : null, l2 ? l2.next : null)
  }
  dfs(reversal(l1), reversal(l2))

  if (sum > 0) p.next = new ListNode(sum, p.next)

  return dummyHead.next
}
