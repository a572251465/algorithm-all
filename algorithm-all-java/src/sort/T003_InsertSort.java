package sort;

/**
 * 插入排序: 通过局部有序，从而推到出全局有序
 * @author  lihh
 */
public class T003_InsertSort {

    public static void print(int[] arr) {
        for (int item : arr) {
            System.out.print(item + " ");
        }
        System.out.println("");
    }

    public static void swap(int[] arr, int i, int j) {
        int value = arr[i];
        arr[i] = arr[j];
        arr[j] = value;
    }

    public static void insertSort(int[] arr) {
        if (arr == null || arr.length < 2) return;

        int end = arr.length - 1;
        for (int i = 1; i < end; i++) {
            for (int j = i; j > 0 && arr[j - 1] > arr[j]; j--) {
                swap(arr, j - 1, j);
            }
        }
    }

    public static void main(String[] args) {
        int[] values = {10, 2, 5, 1, 33, 22, 21, 40};
        print(values);
        insertSort(values);
        print(values);
    }
}
