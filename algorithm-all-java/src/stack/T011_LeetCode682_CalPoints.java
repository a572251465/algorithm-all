package stack;

import java.util.LinkedList;

// https://leetcode.cn/problems/baseball-game/

public class T011_LeetCode682_CalPoints {
  public int calPoints(String[] operations) {
    LinkedList<Integer> stack = new LinkedList<>();
    
    for (int i = 0; i < operations.length; i++) {
      String curr = operations[i];
      switch (curr) {
        case "C":
          stack.removeLast();
          break;
        case "D":
          stack.addLast(stack.getLast() * 2);
          break;
        case "+":
          stack.addLast(stack.getLast() + stack.get(stack.size() - 2));
          break;
        default:
          stack.addLast(Integer.parseInt(curr));
      }
    }
    
    int sum = 0;
    while (!stack.isEmpty()) sum += stack.removeFirst();
    return sum;
  }
}
