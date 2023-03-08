package LinkedList.T008_LeetCode_21_MergeTwoLists;

import LinkedList.ListNode;

// https://leetcode.cn/problems/merge-two-sorted-lists/
public class Option1 {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null || l2 == null) return l1 == null ? l2 : l1;

        ListNode dummy = new ListNode(-1);
        ListNode newHead = dummy;

        while (l1 != null && l2 != null) {
            int v1 = (Integer) l1.val, v2 = (Integer) l2.val;
            if (v1 <= v2) {
                newHead.next = new ListNode(v1);
                l1 = l1.next;
            } else {
                newHead.next = new ListNode(v2);
                l2 = l2.next;
            }
            newHead = newHead.next;
        }

        if (l1 != null) newHead.next = l1;
        if (l2 != null) newHead.next = l2;

        return dummy.next;
    }
}
