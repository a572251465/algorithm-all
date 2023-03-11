package tree.T005_LeetCode_105_BuildTree;

// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

import tree.TreeNode;

import java.util.HashMap;
import java.util.Map;

public class Option001 {

    public TreeNode genTree(int[] pre, int s1, int e1, int[] in, int s2, int e2, Map<Integer, Integer> indexMap) {
        if (s1 > e1 || s2 > e2) return null;

        int rootVal = pre[s1];
        int rootValForInIndex = indexMap.get(rootVal);
        int len = rootValForInIndex - s2;
        TreeNode root = new TreeNode(rootVal);

        root.left = genTree(pre, s1 + 1, s1 + len, in, s2, rootValForInIndex - 1, indexMap);
        root.right = genTree(pre, s1 + len + 1, e1, in, rootValForInIndex + 1, e2, indexMap);
        return root;
    }

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null ^ inorder == null) return null;
        if (preorder == null && inorder == null) return null;
        if (preorder.length != inorder.length) return null;
        if (preorder.length == 1) return new TreeNode(preorder[0]);

        Map<Integer, Integer> indexMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i += 1) indexMap.put(inorder[i], i);

        return genTree(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, indexMap);
    }
}
