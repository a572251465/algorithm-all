package stack;

import java.util.ArrayList;

// https://leetcode.cn/problems/palindrome-linked-list/

public class T007_LeetCode234_IsPalindrome {
  public boolean isPalindrome(ListNode head) {
    if (head.next == null) return true;
    
    ArrayList<Integer> list = new ArrayList<>();
    for (; head != null; head = head.next) list.add(head.val);
    
    int start = 0, end = list.size() - 1;
    while (start <= end) if (list.get(start++) != list.get(end--)) return false;
    return true;
  }
}
