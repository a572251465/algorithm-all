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
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-1)
  let p = dummyHead
  const reversal = (head) => {
    if (head === null) return

    reversal(head.next)
    p.next = new ListNode(head.val)
    p = p.next
  }
  reversal(head)

  return dummyHead.next
}
