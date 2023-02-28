/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return []

  // 对一个二叉搜索树而言 任何一个值都满足 左子树是:[1, i - 1] 右子树满足：[i + 1, n]
  // 然后得到 可行性的二叉树的左子树以及右子树 然后将左子树 以及右子树进行结合
  const genTrees = (start, end) => {
    const res = []
    if (start > end) {
      res.push(null)
      return res
    }

    for (let i = start; i <= end; i += 1) {
      const leftTrees = genTrees(start, i - 1)
      const rightTrees = genTrees(i + 1, end)

      leftTrees.forEach((l) => {
        rightTrees.forEach((r) => {
          const node = new TreeNode(i)
          node.left = l
          node.right = r
          res.push(node)
        })
      })
    }

    return res
  }
  return genTrees(1, n)
}
