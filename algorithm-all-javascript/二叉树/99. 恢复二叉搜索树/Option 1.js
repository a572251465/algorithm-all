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
  const list = [],
    list1 = [];

  const dfs = (r) => {
    if (r === null) return;

    dfs(r.left);

    list.push(r);
    list1.push(r.val);

    dfs(r.right);
  };
  dfs(root);

  list1.sort((a, b) => a - b);
  let i = 0;
  const pos = [];
  for (; i < list.length; i += 1) {
    const r = list[i];
    const val = list1[i];

    if (r.val !== val) pos.push(i);
  }

  const start = pos[0],
    end = pos[1];
  [list[start].val, list[end].val] = [list[end].val, list[start].val];
};
