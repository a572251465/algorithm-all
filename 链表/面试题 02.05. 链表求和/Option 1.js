/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1 === null) return l1
  if (l2 === null) return l2

  const dummyHead = new ListNode(-1)
  let sum = 0,
    p = dummyHead
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0,
      val2 = l2 ? l2.val : 0

    sum = sum + val1 + val2
    const surplus = sum % 10
    sum = (sum / 10) | 0

    p.next = new ListNode(surplus)
    p = p.next

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (sum > 0) p.next = new ListNode(sum)

  return dummyHead.next
}
