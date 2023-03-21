package dichotomy.T001_JudgeExistFromArray;

/**
 * 从一个有序的数组中判断元素是否存在 二分查找法
 * @author  lihh
 */
public class Option1 {
    public static void main(String[] args) {
        System.out.println(judgeExistFromArray(2, new int[]{2}));
        System.out.println(judgeExistFromArray(10, new int[]{2, 3, 6, 9, 12}));
        System.out.println(judgeExistFromArray(20, new int[]{10, 12, 13, 20}));
        System.out.println(judgeExistFromArray(10, new int[]{10, 11, 20, 40}));
    }

    public static boolean judgeExistFromArray(int value, int [] values) {
        if (values == null || values.length == 0) return false;

        int l = 0, r = values.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int realValue = values[mid];

            if (realValue == value) return true;
            if (realValue > value) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return false;
    }
}
