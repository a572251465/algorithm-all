/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function (head) {
  if (head === null || head.next === null) return head

  let p = head
  while (p) {
    let curr = p
    while (curr && curr.next) {
      if (p.val === curr.next.val) {
        curr.next = curr.next.next
      } else {
        curr = curr.next
      }
    }
    p = p.next
  }

  return head
}
