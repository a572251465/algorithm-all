var findSecondMinimumValue = function (root) {
  let ans = -1
  const rootvalue = root.val

  const dfs = (node) => {
    if (node === null) {
      return
    }
    if (ans !== -1 && node.val >= ans) {
      return
    }
    if (node.val > rootvalue) {
      ans = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return ans
}
