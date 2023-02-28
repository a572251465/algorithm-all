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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const check = (s, t) => {
    if (s === null && t === null) return true
    // 此处为了判断两个节点是否相同，如果相同的情况下 判断子树是否相等
    if (s === null || t === null || s.val !== t.val) return false
    return check(s.left, t.left) && check(s.right, t.right)
  }

  const dfs = (s, t) => {
    if (s === null) return false

    // 自己跟subRoot比较  || 左孩子跟subRoot比较 || 右孩子跟subRoot比较
    return check(s, t) || dfs(s.left, t) || dfs(s.right, t)
  }

  return dfs(root, subRoot)
}
