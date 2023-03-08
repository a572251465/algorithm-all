package LinkedList.T007_LeetCode_25_Offer_AddTwoNumbers;

import LinkedList.ListNode;

import java.util.ArrayDeque;

public class Option2 {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ArrayDeque<Integer> d1 = new ArrayDeque<>();
        ArrayDeque<Integer> d2 = new ArrayDeque<>();

        for (; l1 != null; l1 = l1.next) d1.push((Integer) l1.val);
        for (; l2 != null; l2 = l2.next) d2.push((Integer) l2.val);

        int prev = 0;
        ListNode dummy = new ListNode(-1);
        ListNode newHead = dummy;
        while (!d1.isEmpty() || !d2.isEmpty()) {
            int v1 = d1.isEmpty() ? 0 : d1.pop();
            int v2 = d2.isEmpty() ? 0 : d2.pop();
            System.out.println(v1 + "," + v2);

            int sum = v1 + v2 + prev;
            prev = sum / 10;

            newHead.next = new ListNode(sum % 10, newHead.next);
        }

        if (prev != 0) {
            dummy.val = prev;
            return dummy;
        }
        return dummy.next;
    }
}
