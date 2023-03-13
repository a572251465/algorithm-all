package tree.T007_LeetCode_98_IsValidBST;

import tree.TreeNode;

public class Option001 {

    static class TreeInfo {
        public boolean isBst;
        public Integer max;
        public Integer min;

        public TreeInfo() {}
        public TreeInfo(boolean isBst, Integer max, Integer min) {
            this.isBst = isBst;
            this.max = max;
            this.min = min;
        }
    }

    public TreeInfo judgeBstTree(TreeNode root) {
        if (root == null) return null;

        TreeInfo l = judgeBstTree(root.left);
        if (l != null && !l.isBst) return l;

        TreeInfo r = judgeBstTree(root.right);
        if (r != null && !r.isBst) return r;

        boolean isBst = true;
        Integer max = root.val;
        Integer min = root.val;

        if (l != null) {
            max = Math.max(max, l.max);
            min = Math.min(min, l.min);
        }

        if (r != null) {
            max = Math.max(max, r.max);
            min = Math.min(min, r.min);
        }

        boolean leftMaxLessRoot = l == null ? true : l.max < root.val;
        boolean rightMinMoreRoot = r == null ? true : r.min > root.val;
        if (!leftMaxLessRoot || !rightMinMoreRoot) isBst = false;
        return new TreeInfo(isBst, max, min);
    }

    public boolean isValidBST(TreeNode root) {
        if (root == null) return true;
        if (root.left == null && root.right == null) return true;
        return judgeBstTree(root).isBst;
    }
}
