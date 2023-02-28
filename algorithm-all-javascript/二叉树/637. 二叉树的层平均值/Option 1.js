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
var averageOfLevels = function (root) {
  const res = []
  const dfs = (arrRoot = []) => {
    if (arrRoot.length <= 0) return

    const length = arrRoot.length
    let sum = 0,
      item
    const newArr = []
    while ((item = arrRoot.shift())) {
      sum += item.val
      if (item.left) newArr.push(item.left)
      if (item.right) newArr.push(item.right)
    }

    res.push((sum / length).toFixed(5))
    dfs(newArr)
  }
  dfs([root])

  return res
}
