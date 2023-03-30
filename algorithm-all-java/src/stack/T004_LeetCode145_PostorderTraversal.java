package stack;

import tree.TreeNode;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class T004_LeetCode145_PostorderTraversal {
  
  public void process(TreeNode root, List<Integer> list) {
    if (root == null) return;
  
    process(root.left, list);
    process(root.right, list);
    list.add(root.val);
  }
  
  public List<Integer> postorderTraversal(TreeNode root) {
    if (root == null) return Collections.emptyList();
  
    LinkedList<Integer> rs = new LinkedList<>();
    process(root, rs);
    return rs;
  }
}
