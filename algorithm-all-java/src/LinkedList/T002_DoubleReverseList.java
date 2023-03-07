package LinkedList;

public class T002_DoubleReverseList {
    public static void main(String[] args) {
        DoubleListNode n1 = new DoubleListNode(1);
        DoubleListNode n2 = new DoubleListNode(2);
        DoubleListNode n3 = new DoubleListNode(3);

        n1.next = n2;
        n2.next = n3;

        n3.prev = n2;
        n2.prev = n1;

        DoubleListNode newHead = reverseList(n1);
        while (newHead != null) {
            if (newHead.prev != null)
                System.out.print("前" + newHead.prev.val + "|");
            System.out.print("中" + newHead.val + "|");
            if (newHead.next != null)
                System.out.println("后" + newHead.next.val + "|");

            System.out.println("");
            newHead = newHead.next;
        }
    }
    public static DoubleListNode reverseList(DoubleListNode head) {
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
