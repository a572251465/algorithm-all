package tree.T003_LeetCode_101_IsSymmetric;

// https://leetcode.cn/problems/symmetric-tree/

import tree.TreeNode;

public class Option001 {
    public boolean isSymmetricComp(TreeNode p, TreeNode q) {
        if (p == null ^ q == null) return false;
        if (p == null && q == null) return true;

        return p.val == q.val && isSymmetricComp(p.left, q.right) && isSymmetricComp(p.right, q.left);
    }

    public boolean isSymmetric(TreeNode root) {
        return isSymmetricComp(root, root);
    }
}
