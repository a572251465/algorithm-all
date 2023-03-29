package dichotomy;

// https://leetcode.cn/problems/missing-number/

public class T007_LeetCode268_MissingNumber {
  public int missingNumber(int[] nums) {
    int n = nums.length;
    int ans = 0;
    for (int i = 0; i <= n; i++) ans ^= i;
    for (int i = 0; i < n; i++) ans ^= nums[i];
    
    return ans;
  }
}
