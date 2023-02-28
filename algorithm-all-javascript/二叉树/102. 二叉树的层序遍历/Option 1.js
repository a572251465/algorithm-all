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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return []

  const res = []
  const dfs = (arr) => {
    if (arr.length <= 0) return

    const innerArr = []
    const newArr = []
    while (arr.length > 0) {
      const item = arr.shift()
      innerArr.push(item.val)

      if (item.left) newArr.push(item.left)
      if (item.right) newArr.push(item.right)
    }

    res.push(innerArr)
    dfs(newArr)
  }

  dfs([root])
  return res
}
