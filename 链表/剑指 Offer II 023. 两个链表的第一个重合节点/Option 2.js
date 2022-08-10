/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null

  let p = headA
  const set = new Set()

  while (p) {
    set.add(p)
    p = p.next
  }

  p = headB
  while (p) {
    if (set.has(p)) return p
    p = p.next
  }

  return null
}
