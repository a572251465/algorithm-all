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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];

  let posFlag = true;
  const arr = [root];
  const res = [];

  for (; arr.length > 0; ) {
    const newArr = [];
    const transformArr = [];
    let parentArr = arr.slice();

    for (; arr.length > 0; ) {
      const item = arr.shift();
      newArr.push(item.val);
    }

    for (; parentArr.length > 0; ) {
      const item = parentArr.pop();
      if (posFlag !== false) {
        if (item.right) transformArr.push(item.right);
        if (item.left) transformArr.push(item.left);
      } else {
        if (item.left) transformArr.push(item.left);
        if (item.right) transformArr.push(item.right);
      }
    }

    res.push(newArr);
    posFlag = !posFlag;
    arr.push(...transformArr);
  }

  return res;
};
