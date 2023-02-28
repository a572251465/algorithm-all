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
var mergeTwoLists = function (l1, l2) {
  if (l1 === null || l2 === null) return l1 || l2

  let dummyHead = new ListNode(-1),
    p = dummyHead,
    p1 = l1,
    p2 = l2

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }

    p = p.next
  }

  if (p1) p.next = p1
  if (p2) p.next = p2

  return dummyHead.next
}
