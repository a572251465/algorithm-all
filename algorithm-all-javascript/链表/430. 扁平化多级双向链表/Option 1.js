/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head === null || head === undefined) return head

  let p = head
  while (p) {
    const next = p.next
    const curr = flatten(p.child)
    p.child = null
    if (curr) {
      p.next = curr
      curr.prev = p

      let p1 = curr
      while (p1 && p1.next) p1 = p1.next

      p1.next = next
      if (next) next.prev = p1
    }
    p = next
  }

  return head
}
