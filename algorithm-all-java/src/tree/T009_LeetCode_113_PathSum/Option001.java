package tree.T009_LeetCode_113_PathSum;

import tree.TreeNode;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// https://leetcode.cn/problems/path-sum-ii/
public class Option001 {
  public List<Integer> copyValues(List<Integer> target) {
    List<Integer> ans = new ArrayList<>();
    for (Integer num : target) {
      ans.add(num);
    }
    return ans;
  }

  public void depthPathSum(TreeNode root, LinkedList<Integer> prevList, int prevSum, int targetSum, List<List<Integer>> lists) {
    if (root == null) return;
    if (root.left == null && root.right == null) {
      if (prevSum + root.val == targetSum) {
        prevList.add(root.val);
        lists.add(copyValues(prevList));
        prevList.remove(prevList.size() - 1);
      }
      return;
    }

    prevSum += root.val;
    prevList.add(root.val);
    if (root.left != null) {
      depthPathSum(root.left, prevList, prevSum, targetSum, lists);
    }
    if (root.right != null) {
      depthPathSum(root.right, prevList, prevSum, targetSum, lists);
    }
    prevList.remove(prevList.size() - 1);
  }

  public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
    List<List<Integer>> lists = new ArrayList<>();
    if (root == null) return lists;

    depthPathSum(root, new LinkedList<>(), 0, targetSum, lists);
    return lists;
  }
}
