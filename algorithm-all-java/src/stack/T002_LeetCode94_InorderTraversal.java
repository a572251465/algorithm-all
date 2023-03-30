package stack;

import tree.TreeNode;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class T002_LeetCode94_InorderTraversal {
  
  public void process(TreeNode root, List<Integer> list) {
    if (root == null) return;
    process(root.left, list);
    list.add(root.val);
    process(root.right, list);
  }
  
  public List<Integer> inorderTraversal(TreeNode root) {
    if (root == null) return Collections.emptyList();
    LinkedList<Integer> res = new LinkedList<>();
    process(root, res);
    return res;
  }
}
