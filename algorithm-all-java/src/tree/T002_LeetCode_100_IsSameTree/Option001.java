package tree.T002_LeetCode_100_IsSameTree;

// https://leetcode.cn/problems/same-tree/

import tree.TreeNode;

public class Option001 {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null ^ q == null) return false;
        if (p == null && q == null) return true;
        return p.val == q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
