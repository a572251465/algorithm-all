package sort;

/**
 * 选择排序的使用方式
 * @author  lihh
 */
public class SelectionSort {

    public static void print(int[] arr) {
        for (int item:  arr) {
            System.out.print(item + " ");
        }
        System.out.println("");
    }

    public static void main(String[] args) {
        int[] values = {10, 2, 5, 1, 33, 22, 21, 40};
        print(values);
        selectionSort(values);
        print(values);
    }

    public static void selectionSort(int[] arr) {
        if (arr == null || arr.length < 2) return;

        for (int i = 0; i < arr.length; i++) {
            // 假如第一个值是最小值
            int minValueIndex = i;
            // 通过循环依次比较，找出比minValueIndex还小的值，反之就是最小值。
            /**
             * 第一次循环结束后，放到数组最左侧的元素就是最小值，下一次从下标为1的元素开始循环
             * 第二次循环结束后，放到数组第二个元素的就是小值，下次从下标为2的元素开始循环
             * 以此类推
             * 数组循环的第j值，依次跟其余的值进行比较，如果最小则不动，反之就交换位置
             */
            for (int j = i + 1; j < arr.length; j++)
                minValueIndex = arr[j] < arr[minValueIndex] ? j : minValueIndex;

            swap(arr, minValueIndex, i);
        }
    }

    public static void swap(int[] arr, int preIndex, int nextIndex) {
        int preValue = arr[preIndex];
        arr[preIndex] = arr[nextIndex];
        arr[nextIndex] = preValue;
    }
}
