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

  let curr = head
  while (curr) {
    const node = new Node(curr.val, curr.next)
    curr.next = node
    curr = curr.next.next
  }

  curr = head
  while (curr) {
    if (curr.random) curr.next.random = curr.random.next
    curr = curr.next.next
  }

  curr = head
  let ans = head.next
  while (curr && curr.next) {
    const next = curr.next
    curr.next = curr.next.next
    curr = next
  }

  return ans
}
