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
 * @return {boolean}
 */

var isValidBST = function (root) {
  if (root === null) return true;

  let flag = true,
    prev = -Infinity;
  const dfs = (r) => {
    if (r === null) return;

    dfs(r.left);
    if (flag === false) return;
    if (r.val > prev) {
      prev = r.val;
    } else {
      flag = false;
    }
    dfs(r.right);
  };

  dfs(root);

  return flag;
};
