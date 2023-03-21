package dichotomy.T004_LocalMinimum;

/**
 * 给定一个数组  以及一个值，数组满足：是无序的 + 任意一个值跟左右两侧值不同
 *
 * @author lihh
 */
public class T004_LocalMinimum {
    public static void main(String[] args) {
        System.out.println(localMinimum(new int[]{2, 1, 3, 10, 4, 11}));
    }

    public static int localMinimum(int[] values) {
        if (values == null || values.length == 0) return -1;
        if (values.length == 1) return 0;

        int l = 0, r = values.length - 1;
        if (values[0] < values[1]) return 0;
        if (values[r] < values[r - 1]) return r;

        while (l < r - 1) {
            int mid = l + (r - l) / 2;
            int midValue = values[mid], lValue = values[mid - 1], rValue = values[mid + 1];

            if (lValue > midValue && rValue > midValue) return mid;

            /**
             * lValue > midValue rValue < midValue
             * lValue < midValue rValue > midValue
             * lValue < midValue rValue < midValue
             */
            if (lValue < midValue) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return values[l] < values[r] ? l : r;
    }
}
