package dichotomy;

/**
 * 给定一个升序数组以及一个value值，找到>=value的做左侧值
 * @author  lihh
 */
public class T002_LeftMinValueIndex {
    public static void main(String[] args) {
        System.out.println(leftMinValueIndex(2, new int[]{1, 2, 2, 4, 6, 7, 10}));
        System.out.println(leftMinValueIndex(3, new int[]{1, 2, 2, 4, 6, 7, 10}));
        System.out.println(leftMinValueIndex(11, new int[]{1, 2, 2, 4, 6, 7, 10}));
        System.out.println(leftMinValueIndex(1, new int[]{2, 2, 4, 6, 7, 10}));
    }

    public static int leftMinValueIndex(int value, int[] values) {
        if (values == null || values.length == 0) return -1;
        int l = 0, r = values.length - 1;
        int ans = -1;

        while (l <= r) {
            int mid = l + (r - l) / 2;
            int midValue = values[mid];

            if (midValue >= value) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return ans;
    }
}
