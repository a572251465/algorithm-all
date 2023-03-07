package LinkedList;

public class DoubleListNode<T> {
    T val;
    DoubleListNode<T> next;
    DoubleListNode<T> prev;

    DoubleListNode() {
    }

    DoubleListNode(T val) {
        this.val = val;
    }

    DoubleListNode(T val, DoubleListNode next, DoubleListNode prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}