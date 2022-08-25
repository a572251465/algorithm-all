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
 * @return {number[]}
 */
var findMode = function (root) {
  if (root.left === null && root.right === null) return [root.val]

  let res = [],
    prev = root.val,
    sum = 0

  const dfs = (root) => {
    if (root === null) return

    dfs(root.left)
    if (root.val !== prev) {
      if (res.length === 0) {
        res.push({ val: prev, count: sum })
      } else {
        const max = Math.max(...res.map((item) => item.count))
        if (max <= sum) {
          res = res.filter((item) => item.count >= sum)
          res.push({ val: prev, count: sum })
        }
      }
      prev = root.val
      sum = 1
    } else {
      sum += 1
    }
    dfs(root.right)
  }
  dfs(root)

  if (sum > 0) {
    const max = Math.max(...res.map((item) => item.count))
    if (max <= sum) {
      res = res.filter((item) => item.count >= sum)
      res.push({ val: prev, count: sum })
    }
  }

  return res.map((item) => item.val)
}
