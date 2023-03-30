package stack;

// https://leetcode.cn/problems/implement-queue-using-stacks/

import java.util.Stack;

public class T006_LeetCode232_MyQueue {

}

class MyQueue {
  
  Stack<Integer> s1 = new Stack<>();
  Stack<Integer> s2 = new Stack<>();
  
  // 1 2 3 4 5
  public void push(int x) {
    s1.push(x);
  }
  
  private void moveElement() {
    if (s2.isEmpty()) while (!s1.isEmpty()) s2.push(s1.pop());
  }
  
  public int pop() {
    if (s2.isEmpty()) this.moveElement();
    return s2.pop();
  }
  
  public int peek() {
    if (s2.isEmpty()) this.moveElement();
    return s2.peek();
  }
  
  public boolean empty() {
    return s1.isEmpty() && s2.isEmpty();
  }
}