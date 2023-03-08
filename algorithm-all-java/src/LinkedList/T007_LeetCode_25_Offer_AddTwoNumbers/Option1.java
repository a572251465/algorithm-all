package LinkedList.T007_LeetCode_25_Offer_AddTwoNumbers;

import LinkedList.ListNode;

public class Option1 {

    int prev;
    int k;
    ListNode newHead1;
    ListNode newHead2;

    public int getLen(ListNode l) {
        if (l == null) return 0;

        int k = 1;
        ListNode tmp;
        while ((tmp = l.next) != null && (k++) > 0) l = tmp;

        return k;
    }

    public void loop(ListNode l1, ListNode l2) {
        if (l1 == null && l2 == null) return;

        // 1 2 3 4 5
        //        3 4 5
        loop(l1.next, --k > 0 ? null : k == 0 ? newHead2 : l2.next);

        int v1 = l1 == null ? 0 : (Integer) l1.val;
        int v2 = l2 == null ? 0 : (Integer) l2.val;

        int sum = v1 + v2 + prev;
        prev = sum / 10;
        l1.val = sum % 10;
    }


    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int len1 = this.getLen(l1);
        int len2 = this.getLen(l2);

        newHead1 = len1 >= len2 ? l1 : l2;
        newHead2 = newHead1 == l1 ? l2 : l1;

        k = Math.abs(len1 - len2);
        this.loop(newHead1, k == 0 ? newHead2 : null);
        if (prev == 0) return newHead1;

        ListNode newHead = new ListNode(prev, newHead1);
        return newHead;
    }
}
