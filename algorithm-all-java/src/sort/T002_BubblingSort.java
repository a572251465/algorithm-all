package sort;

/**
 * 冒泡排序的方式：通过两两交换，逐一将最大值冒泡到最后
 * @author  lihh
 */
public class T002_BubblingSort {
    public static void main(String[] args) {
        int[] values = {10, 2, 5, 1, 33, 22, 21, 40};
        print(values);
        bubblingSort(values);
        print(values);
    }

    public static void print(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("");
    }

    public static void swap(int[] arr, int i, int j) {
        int value = arr[i];
        arr[i] = arr[j];
        arr[j] = value;
    }

    public static void bubblingSort(int[] arr) {
        if (arr == null || arr.length < 2) return;

        int end = arr.length - 1;
        for (int i = end; i >= 0 ; i--) {
            for (int j = 1; j <= end; j++) {
                if (arr[j - 1] > arr[j]) swap(arr, j-1, j);
            }
        }
    }
}
