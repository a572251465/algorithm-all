package sort;

import java.util.Arrays;

public class T005_QuickSort {
  public static void main(String[] args) {
    int[] arr = new int[]{1, 2, 5, 6, 7, 3, 8, 6};
    System.out.println(Arrays.toString(arr));
    quickSort(arr, 0, arr.length - 1);
    System.out.println(Arrays.toString(arr));
  }

  public static void quickSort(int[] arr, int l, int r) {
    if (arr.length < 2 || l >= r) return;
    int[] res = process(arr, l, r);
    process(arr, l, res[0] - 1);
    process(arr, res[1] + 1, r);
  }

  public static int[] process(int[] arr, int left, int right) {
    int l = left - 1, index = left, r = right, referValue = arr[r];

    while (index < r) {
      if (arr[index] < referValue) {
        swap(arr, ++l, index++);
      } else if (arr[index] > referValue) {
        swap(arr, --r, index);
      } else {
        index++;
      }
    }
    swap(arr, r, right);
    return new int[]{l + 1, r};
  }

  public static void swap(int[] arr, int i, int j) {
    if (i == j) return;
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
}
