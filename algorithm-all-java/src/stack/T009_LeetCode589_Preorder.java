package stack;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

// https://leetcode.cn/problems/n-ary-tree-preorder-traversal/

public class T009_LeetCode589_Preorder {
  
  public void process(Node root, List<Integer> rs) {
    if (root == null) return;
    rs.add(root.val);
    
    for (Node node : root.children) {
      process(node, rs);
    }
  }
  
  public List<Integer> preorder(Node root) {
    if (root == null) return Collections.emptyList();
    
    LinkedList<Integer> rs = new LinkedList<>();
    process(root, rs);
    return rs;
  }
}
