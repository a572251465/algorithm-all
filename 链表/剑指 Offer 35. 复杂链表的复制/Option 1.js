/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return head

  const map = new Map()
  let p = head
  while (p) {
    map.set(p, new Node(p.val))
    p = p.next
  }

  p = head
  while (p) {
    const node = map.get(p)
    node.next = p.next === null ? null : map.get(p.next)
    node.random = p.random === null ? null : map.get(p.random)
    p = p.next
  }

  return map.get(head)
}
