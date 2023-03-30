package stack;

import java.util.LinkedList;

// https://leetcode.cn/problems/implement-stack-using-queues/

public class T005_LeetCode225_MyStack {
  public static void main(String[] args) {
  
  }
}

class MyStack {
  
  LinkedList<Integer> queue1 = new LinkedList<>();
  LinkedList<Integer> queue2 = new LinkedList<>();
  
  // 1 2 3 4 5
  public void push(int x) {
    queue2.offer(x);
    while (!queue1.isEmpty()) queue2.offer(queue1.poll());
    LinkedList<Integer> tmp = new LinkedList<>();
    queue1 = queue2;
    queue2 = tmp;
  }
  
  public int pop() {
    return queue1.poll();
  }
  
  public int top() {
    return queue1.peek();
  }
  
  public boolean empty() {
    return queue1.isEmpty() && queue2.isEmpty();
  }
}

