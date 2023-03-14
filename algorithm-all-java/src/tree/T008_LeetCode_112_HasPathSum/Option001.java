package tree.T008_LeetCode_112_HasPathSum;

import tree.TreeNode;

public class Option001 {

    public boolean isPathSum;

    public void depthPathSum(TreeNode root, int prevSum, int targetSum) {
        if (root == null || isPathSum) return;
        prevSum += root.val;
        if (root.left == null && root.right == null) {
            if (prevSum == targetSum) {
                isPathSum = true;
                return;
            }
            return;
        }

        if (root.left != null) depthPathSum(root.left, prevSum, targetSum);
        if (root.right != null) depthPathSum(root.right, prevSum, targetSum);
    }

    public boolean hasPathSum(TreeNode root, int targetSum) {
        isPathSum = false;
        if (root == null) return false;
        depthPathSum(root, 0, targetSum);
        return isPathSum;
    }
}
