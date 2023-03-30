package stack;

import tree.TreeNode;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class T003_LeetCode144_PreorderTraversal {
  
  public void process(TreeNode root, List<Integer> list) {
    if (root == null) return;
    
    list.add(root.val);
    process(root.left, list);
    process(root.right, list);
  }
  
  public List<Integer> preorderTraversal(TreeNode root) {
    if (root == null) return Collections.emptyList();
    LinkedList<Integer> rs = new LinkedList<>();
    process(root, rs);
    return rs;
  }
}
