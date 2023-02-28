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
var mergeNodes = function (head) {
  let p = head.next

  while (p) {
    let curr = p,
      sum = 0
    while (curr.val !== 0) {
      sum += curr.val
      curr = curr.next
    }
    p.val = sum
    p.next = curr.next
    p = curr.next
  }

  return head.next
}
