package stack;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

// https://leetcode.cn/problems/n-ary-tree-postorder-traversal/

public class T010_LeetCode590_Postorder {
  
  public void process(Node root, List<Integer> rs) {
    if (root == null) return;
    
    for (Node node : root.children) {
      process(node, rs);
    }
    
    rs.add(root.val);
  }
  
  public List<Integer> postorder(Node root) {
    if (root == null) return Collections.emptyList();
    
    LinkedList<Integer> rs = new LinkedList<>();
    process(root, rs);
    return rs;
  }
}
