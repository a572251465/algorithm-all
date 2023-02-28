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
  if (head === null) return head

  let p = head
  while (p) {
    const child = flatten(p.child)
    p.child = null
    const next = p.next
    let lastChild = child
    while (lastChild && lastChild.next) lastChild = lastChild.next

    if (child) {
      p.next = child
      child.prev = p
      lastChild.next = next
      if (next) next.prev = lastChild
    }

    p = next
  }

  return head
}
