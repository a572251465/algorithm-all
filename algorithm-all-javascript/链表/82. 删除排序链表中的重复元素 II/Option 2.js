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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-101, head)
  let p = dummyHead

  while (p && p.next && p.next.next) {
    const item = p.next.val
    const item1 = p.next.next.val

    if (item !== item1) {
      p = p.next
    } else {
      while (p.next && item === p.next.val) {
        p.next = p.next.next
      }
    }
  }

  return dummyHead.next
}
