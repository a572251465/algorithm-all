package dichotomy.T003_RightHandValueIndex;

/**
 * 二分法 给定一个升序数组以及一个值value，找到<=value 最右边的位置
 * @author  lihh
 */
public class T003_RightHandValueIndex {
    public static void main(String[] args) {

        System.out.println(rightHandValueIndex(5, new int[]{2, 4, 5, 5, 8}));
        System.out.println(rightHandValueIndex(2, new int[]{2, 4, 5, 5, 8}));
        System.out.println(rightHandValueIndex(10, new int[]{2, 4, 5, 5, 8, 11}));
    }

    public static int rightHandValueIndex(int value, int[] values) {
        if (values == null || values.length == 0) return -1;

        int l = 0, r = values.length - 1, ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int midValue = values[mid];

            if (midValue <= value) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return ans;
    }
}
