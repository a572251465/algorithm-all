package tree.T006_LeetCode_110_IsBalanced;

import tree.TreeNode;

// https://leetcode.cn/problems/balanced-binary-tree/

public class Option001 {
    public int height(TreeNode root) {
        if (root == null) return 0;

        int l = height(root.left);
        if (l == -1) return l;
        int r = height(root.right);
        if (r == -1) return r;

        return Math.abs(l - r) > 1 ? -1 : Math.max(l, r) + 1;
    }

    public boolean isBalanced(TreeNode root) {
        return height(root) != -1;
    }
}
