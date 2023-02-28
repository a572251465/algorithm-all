/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (root === null) return root

  let prev = null,
    head = null
  const dfs = (root) => {
    if (root === null || root === undefined) return

    dfs(root.left)

    if (head === null) head = root
    root.left = prev
    if (prev) prev.right = root
    prev = root

    dfs(root.right)
  }
  dfs(root)

  head.left = prev
  prev.right = head

  return head
}
