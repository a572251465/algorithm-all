/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (head === null || head.next === null) return false

  const set = new Set()
  let p = head

  while (p) {
    if (set.has(p)) return true
    set.add(p)
    p = p.next
  }

  return false
};
