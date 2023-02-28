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
var levelOrderBottom = function (root) {
  if (root === null) return [];

  // 表示结果
  const res = [];
  const arr = [root];

  for (; arr.length > 0; ) {
    const newRes = [];
    const tempArr = [];

    for (; arr.length > 0; ) {
      const item = arr.shift();
      newRes.push(item.val);

      if (item.left) tempArr.push(item.left);
      if (item.right) tempArr.push(item.right);
    }

    res.unshift(newRes);
    arr.push(...tempArr);
  }

  return res;
};
