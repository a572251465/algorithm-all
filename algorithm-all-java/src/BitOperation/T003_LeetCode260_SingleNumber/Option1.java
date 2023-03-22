package BitOperation.T003_LeetCode260_SingleNumber;

public class Option1 {
  public int[] singleNumber(int[] nums) {
    int ans = 0;
    for (int item : nums) ans ^= item;
    
    // 最右侧的1
    int rightVal = ans & (~ans + 1);
    // 过滤所有最右侧值为1的数
    int onlyOne = 0;
    for (int item : nums) if ((item & rightVal) != 0) onlyOne ^= item;
    return new int[]{onlyOne, ans ^ onlyOne};
  }
}
