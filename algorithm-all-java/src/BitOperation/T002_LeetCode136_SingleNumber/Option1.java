package BitOperation.T002_LeetCode136_SingleNumber;

public class Option1 {
  public int singleNumber(int[] nums) {
    int res = 0;
    for (int item : nums) res ^= item;
    return res;
  }
}
