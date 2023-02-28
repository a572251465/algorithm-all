/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;

  let cur = root;
  while (cur !== null) {
    let dummy = new Node(0);
    let pre = dummy;

    while (cur !== null) {
      if (cur.left !== null) {
        pre.next = cur.left;
        pre = pre.next;
      }

      if (cur.right !== null) {
        pre.next = cur.right;
        pre = pre.next;
      }
      cur = cur.next;
    }

    cur = dummy.next;
  }

  return root;
};
