package LinkedList;

public class ListNode<T> {
    T val;
    ListNode next;

    ListNode() {
    }

    ListNode(T val) {
        this.val = val;
    }

    ListNode(T val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}