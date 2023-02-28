/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 0) return null

  const middleIndex = nums.length >> 1,
    middleValue = nums[middleIndex]

  const root = new TreeNode(middleValue)
  root.left = sortedArrayToBST(nums.slice(0, middleIndex))
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1))

  return root
}
