package LinkedList;

public class T001_DoubleReverseList {
    public DoubleListNode reverseList(DoubleListNode head) {
        if (head == null || head.next == null) return head;

        DoubleListNode next, newHead = null;

        // 1 => 2 => 3
        while (head != null) {
            next = head.next;
            head.next = newHead;
            head.prev = next;
            newHead = head;
            head = next;
        }
        return newHead;
    }
}
