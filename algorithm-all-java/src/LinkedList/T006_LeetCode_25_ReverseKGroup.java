package LinkedList;

public class T006_LeetCode_25_ReverseKGroup {

    public int genLen(ListNode head) {
        int k = 0;
        if (head == null) return k;

        ListNode tmp;
        while ((tmp = head) != null) {
            head = tmp.next;
            k ++;
        }

        return k;
    }

    public ListNode reverserKNode(ListNode head, int k) {
        int len = this.genLen(head);
        if (len < k) return head;

        ListNode newHead = null;
        while (k-- > 0) {
            ListNode next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }
        ListNode tmp = newHead;
        while (tmp != null && tmp.next != null) tmp = tmp.next;
        tmp.next = head;

        return newHead;
    }

    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || head.next == null || k <= 1) return head;

        ListNode dummy = new ListNode(-1, head);
        ListNode newHead = dummy;
        while (newHead != null) {
            newHead.next = this.reverserKNode(newHead.next, k);
            int len = k;
            while (len -- > 0 && newHead != null) newHead = newHead.next;
        }

        return dummy.next;
    }
}
