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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let xRoot = null,
    yRoot = null,
    levelRoot = []

  const dfs = (root, level) => {
    if (root === null) return

    const res = []
    if (root.left) res.push(root.left.val)
    if (root.right) res.push(root.right.val)

    if (res.includes(x)) {
      const newLevel = level + 1
      if (levelRoot.includes(newLevel) || levelRoot.length === 0) {
        xRoot = root
        levelRoot.push(newLevel)
      } else {
        if (levelRoot.length > 1) return
      }
    }

    if (res.includes(y)) {
      const newLevel = level + 1
      if (levelRoot.includes(newLevel) || levelRoot.length === 0) {
        yRoot = root
        levelRoot.push(newLevel)
      } else {
        if (levelRoot.length > 1) return
      }
    }

    dfs(root.left, level + 1)
    dfs(root.right, level + 1)
  }
  dfs(root, 0)

  return xRoot && yRoot && xRoot !== yRoot
}
