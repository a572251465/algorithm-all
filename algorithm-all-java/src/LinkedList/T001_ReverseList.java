package LinkedList;

public class T001_ReverseList {
    public ListNode reverseList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode next, newHead = null;
        // 1 => 2 => 3
        while (head != null) {
            next = head.next;
            head.next = newHead;
            newHead = head;
            head = next;
        }

        return newHead;
    }
}
