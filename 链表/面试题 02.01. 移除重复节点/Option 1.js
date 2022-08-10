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

  const set = new Set([head.val])
  let p = head

  while (p && p.next) {
    if (set.has(p.next.val)) {
      p.next = p.next.next
    } else {
      set.add(p.next.val)
      p = p.next
    }
  }

  return head
}
