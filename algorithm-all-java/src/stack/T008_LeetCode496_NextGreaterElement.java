package stack;

import java.util.HashMap;
import java.util.Stack;

// https://leetcode.cn/problems/next-greater-element-i/

public class T008_LeetCode496_NextGreaterElement {
  public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    if (nums1.length == nums2.length && nums1.length == 1) return new int[]{-1};
    
    HashMap<Integer, Integer> cacheMap = new HashMap<>();
    Stack<Integer> stack = new Stack<>();
    
    for (int end = nums2.length - 1; end >= 0; end--) {
      int currItem = nums2[end];
      while (!stack.isEmpty() && currItem >= stack.peek()) stack.pop();
      
      cacheMap.put(currItem, stack.isEmpty() ? -1 : stack.peek());
      stack.push(currItem);
    }
    
    int[] res = new int[nums1.length];
    for (int i = 0; i < nums1.length; i++) res[i] = cacheMap.get(nums1[i]);
    return res;
  }
}
