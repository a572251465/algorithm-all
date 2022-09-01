/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null

  const dfs = (start, end) => {
    if (start > end) return null

    const middleIndex = start + ((end - start) >> 1)
    const value = nums[middleIndex]
    const root = new TreeNode(value)
    root.left = dfs(start, middleIndex - 1)
    root.right = dfs(middleIndex + 1, end)

    return root
  }
  return dfs(0, nums.length)
}
