package other;

/**
 * 返回指定l~r 范围内的元素和
 * @author  lihh
 */
public class T001_PrefixSum {
    public static void main(String[] args) {
        int[] values = {10, 20, 1, 4, 5, 9, 10};
        int[] cacheSum = new int[values.length];
        int preSum = cacheSum[0] = values[0];
        for (int i = 1; i < values.length; i++) {
            preSum += values[i];
            cacheSum[i] = preSum;
        }

        System.out.println(designRangeSum(0, 3, cacheSum));
        System.out.println(designRangeSum(2, 4, cacheSum));
        System.out.println(designRangeSum(4, 6, cacheSum));
    }

    public static int designRangeSum(int l, int r, int[] cacheSum) {
        if (r >= cacheSum.length) r = cacheSum.length - 1;
        if (l < 0 || r < 0) return 0;
        if (l > r) return 0;
        if (r == 0) return 0;
        if (l == 0) return cacheSum[r];
        return cacheSum[r] - cacheSum[l];
    }
}
