package LinkedList;

/**
 * 使用双向链表 实现双端队列
 * @author  lihh
 */
public class T005_DoubleItemQueueForLinkedList<T> {

    private int size;
    DoubleListNode<T> head;
    DoubleListNode<T> tail;

    public int size() {
        return this.size;
    }

    public boolean empty() {
        return this.size == 0;
    }

    public void pushHead(T value) {
        DoubleListNode<T> node = new DoubleListNode<>(value);
        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;

        this.size ++;
    }

    public T popHead() {
        if (this.empty()) return null;

        T value = this.head.val;
        if (this.head == this.tail) {
            this.head = this.tail = null;
        } else {
            DoubleListNode next = this.head.next;
            this.head.next = null;
            next.prev = null;
            this.head = next;
        }

        this.size --;
        return value;
    }

    public void pushTail(T value) {
        DoubleListNode<T> node = new DoubleListNode<>(value);
        if (this.head == null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.size ++;
    }

    public T popTail() {
        if (this.empty()) return null;

        T value = this.tail.val;
        if (this.tail == this.head) {
            this.tail = this.head = null;
        } else {
            DoubleListNode prev = this.tail.prev;
            prev.next = null;
            this.tail.prev = null;
            this.tail = prev;
        }

        this.size --;
        return value;
    }

    public static void main(String[] args) {
        T005_DoubleItemQueueForLinkedList<Integer> list = new T005_DoubleItemQueueForLinkedList<>();
        list.pushHead(1);
        list.pushHead(2);
        list.pushHead(3);
        list.pushTail(4);
        list.pushTail(5);

        System.out.println(list.popHead());
        System.out.println(list.popHead());
        System.out.println(list.popTail());
        System.out.println(list.popTail());
        System.out.println(list.popTail());
    }
}
