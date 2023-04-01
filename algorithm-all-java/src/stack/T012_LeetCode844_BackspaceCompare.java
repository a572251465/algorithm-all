package stack;

// https://leetcode.cn/problems/backspace-string-compare/

public class T012_LeetCode844_BackspaceCompare {
  public boolean backspaceCompare(String s, String t) {
    if (s == t) return true;
    
    int sIndex = s.length() - 1, tIndex = t.length() - 1, sCount = 0, tCount = 0;
    while (sIndex >= 0 || tIndex >= 0) {
      while (sIndex >= 0) {
        char curr = s.charAt(sIndex);
        if (curr == '#') {
          sCount++;
          sIndex--;
          continue;
        }
        if (sCount > 0) {
          sCount--;
          sIndex--;
          continue;
        }
        break;
      }
      
      while (tIndex >= 0) {
        char curr = t.charAt(tIndex);
        if (curr == '#') {
          tCount++;
          tIndex--;
          continue;
        }
        if (tCount > 0) {
          tCount--;
          tIndex--;
          continue;
        }
        break;
      }
      
      if (sIndex >= 0 && tIndex >= 0) {
        if (s.charAt(sIndex) != t.charAt(tIndex)) return false;
      } else {
        if (sIndex >= 0 || tIndex >= 0) return false;
      }
      sIndex--;
      tIndex--;
    }
    
    return true;
  }
}
