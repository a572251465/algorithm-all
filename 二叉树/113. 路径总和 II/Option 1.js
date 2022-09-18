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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (root === null) return [];

  const res = [];
  const list = [{ root, diff: targetSum - root.val, arr: [root.val] }];

  while (list.length > 0) {
    const item = list.shift();
    const { root, diff, arr } = item;
    if (root.left === null && root.right === null && diff === 0) {
      res.push([...arr]);
      continue;
    }

    const { left, right } = root;
    if (left !== null) {
      list.push({ root: left, diff: diff - left.val, arr: [...arr, left.val] });
    }

    if (right !== null) {
      list.push({
        root: right,
        diff: diff - right.val,
        arr: [...arr, right.val]
      });
    }
  }

  return res;
};
