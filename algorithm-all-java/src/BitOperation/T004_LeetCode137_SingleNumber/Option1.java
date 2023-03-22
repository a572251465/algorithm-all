package BitOperation.T004_LeetCode137_SingleNumber;

// https://leetcode.cn/problems/single-number-ii/
public class Option1 {
  public int singleNumber(int[] nums) {
    int[] ans = new int[32];
    for (int item : nums) {
      for (int i = 0; i < ans.length; i++) {
        ans[i] += ((item >> i) & 1);
      }
    }
    
    int res = 0;
    for (int i = 0; i < ans.length; i++) {
      if ((ans[i] % 3) != 0) res |= (1 << i);
    }
    
    return res;
  }
}
