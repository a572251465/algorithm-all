package tree.T004_LeetCode_104_MaxDepth;

// https://leetcode.cn/problems/maximum-depth-of-binary-tree/

import tree.TreeNode;

public class Option001 {
    public int maxDepth(TreeNode root) {
        if (root == null) return 0;

        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
