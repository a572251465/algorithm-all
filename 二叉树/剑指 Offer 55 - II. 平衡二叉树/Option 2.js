/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
  if (root === null) return true

  return (
    Math.abs(height(root.left) - height(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

const height = (root) => {
  if (root === null) {
    return 0
  } else {
    return Math.max(height(root.left), height(root.right)) + 1
  }
}
