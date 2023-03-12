package tree.T001_LeetCode_102_LevelOrder;

import tree.TreeNode;

import java.util.*;

public class Option001 {
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root == null) return Collections.EMPTY_LIST;
        List<List<Integer>> res = new ArrayList<>();
        if (root.left == null && root.right == null) {
            res.add(Arrays.asList(root.val));
            return res;
        }

        LinkedList<TreeNode> queue = new LinkedList<>();
        queue.addFirst(root);
        while (!queue.isEmpty()) {
            Integer len = queue.size();
            ArrayList<Integer> partRes = new ArrayList<>();
            for (int i = 0; i < len; i++) {
                TreeNode currNode = queue.pollLast();
                partRes.add(currNode.val);
                if (currNode.left != null) queue.addFirst(currNode.left);
                if (currNode.right != null) queue.addFirst(currNode.right);
            }
            res.add(partRes);
        }
        return res;
    }
}
