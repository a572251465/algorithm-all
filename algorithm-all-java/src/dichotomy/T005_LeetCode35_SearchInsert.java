package dichotomy;

public class T005_LeetCode35_SearchInsert {
  public int searchInsert(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    while (l <= r) {
      int mid = l + ((r - l) >> 1);
      if (target == nums[mid]) return mid;
      if (target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return l;
  }
}
