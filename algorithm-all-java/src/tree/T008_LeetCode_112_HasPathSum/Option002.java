package tree.T008_LeetCode_112_HasPathSum;

import tree.TreeNode;

public class Option002 {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        int nextSum = targetSum - root.val;
        if (root.left == null && root.right == null) {
            if (nextSum == 0) return true;
            return false;
        }
        return hasPathSum(root.left, nextSum) || hasPathSum(root.right, nextSum);
    }
}
