package BitOperation.T001_LeetCode16_SwapNumbers;

public class Option1 {
  public int[] swapNumbers(int[] numbers) {
    // a^b
    numbers[0] = numbers[0] ^ numbers[1];
    // a^b^b
    numbers[1] = numbers[0] ^ numbers[1];
    // a^b^a
    numbers[0] = numbers[0] ^ numbers[1];
    return numbers;
  }
}
