/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const hashTable = []
  let flag = false

  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)

    if (hashTable.includes(root.val)) {
      flag = true
      return;
    } else {
      hashTable.push(k - root.val)
    }

    dfs(root.right)
  }
  dfs(root)

  return flag
}
