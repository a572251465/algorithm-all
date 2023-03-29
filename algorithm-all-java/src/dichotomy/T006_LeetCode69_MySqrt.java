package dichotomy;

// https://leetcode.cn/problems/sqrtx/

public class T006_LeetCode69_MySqrt {
  public int mySqrt(int x) {
    if (x <= 1) return x;
    
    int l = 0, r = x, prev = -1;
    while (l <= r) {
      int mid = l + ((r - l) / 2);
      
      if ((long) mid * mid <= x) {
        l = mid + 1;
        prev = mid;
      } else {
        r = mid - 1;
      }
    }
    
    return prev;
  }
}
