package stack;

import java.util.*;

// https://leetcode.cn/problems/valid-parentheses/

public class T001_LeetCode20_IsValid {
  
  private static final Map<String, String> map = new HashMap<String, String>() {{
    put("{", "}");
    put("[", "]");
    put("(", ")");
    put("?", "?");
  }};
  
  public boolean isValid(String s) {
    if (s.length() % 2 != 0) return false;
    
    Stack<String> stack = new Stack<String>() {{
      push("?");
    }};
    for (String charItem : s.split("")) {
      if (map.containsKey(charItem)) stack.push(charItem);
      else if (!charItem.equals(map.get(stack.pop()))) return false;
    }
    
    return stack.size() == 1;
  }
}
