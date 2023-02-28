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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  const arr = [];
  let one = null,
    two = null;

  const dfs = (root) => {
    if (root === null) return;

    dfs(root.left);
    arr.push(root);
    dfs(root.right);
  };
  dfs(root);

  for (let i = 0; i < arr.length - 1; i += 1) {
    const val = arr[i].val;
    const val1 = arr[i + 1].val;

    // 7 2 3 4 5 6 1
    if (val > val1) {
      two = arr[i + 1];
      if (one === null) one = arr[i];
    }
  }

  const temp = two.val;
  two.val = one.val;
  one.val = temp;
};
