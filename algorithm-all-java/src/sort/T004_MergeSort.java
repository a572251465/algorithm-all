package sort;

public class T004_MergeSort {
  public static void main(String[] args) {
    int[] values = {10, 2, 5, 1, 33, 22, 21, 40};
    process(values, 0, values.length - 1);
    print(values);
  }

  public static void print(int[] values) {
    for (int i : values) {
      System.out.print(i + " ");
    }
    System.out.println();
  }

  public static void merge(int[] args, int l, int m, int r) {
    int[] helper = new int[r - l + 1];
    int i = 0;
    int p1 = l;
    int p2 = m + 1;

    while (p1 <= m && p2 <= r) helper[i++] = args[p1] < args[p2] ? args[p1++] : args[p2++];

    while (p1 <= m) helper[i++] = args[p1++];
    while (p2 <= r) helper[i++] = args[p2++];

    for (i = 0; i < helper.length; i++) {
      args[l + i] = helper[i];
    }
  }

  public static void process(int[] args, int l, int r) {
    if (l >= r) return;

    int mid = l + ((r - l) >> 1);
    process(args, l, mid);
    process(args, mid + 1, r);

    merge(args, l, mid, r);
  }
}
