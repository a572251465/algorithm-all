package LinkedList;

public class T003_QueueForLinkedList {

    private int size;
    private ListNode<Integer> head;
    private ListNode<Integer> tail;

    public static void main(String[] args) {
        T003_QueueForLinkedList queue = new T003_QueueForLinkedList();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        int value;
        while ((value = queue.dequeue()) != -1) System.out.println(value);
    }

    /**
     * 获取队列长度
     *
     * @return
     * @author lihh
     */
    public int size() {
        return this.size;
    }

    /**
     * 判断队列是否为空
     *
     * @return
     * @author lihh
     */
    public boolean isEmpty() {
        return this.size == 0;
    }

    /**
     * 从队尾添加一个元素
     *
     * @param value
     * @return
     * @author lihh
     */
    public void enqueue(int value) {
        ListNode node = new ListNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    /**
     * 从对头删除一个元素
     *
     * @return 返回的元素值
     * @author lihh
     */
    public int dequeue() {
        if (this.isEmpty()) return -1;

        int value = this.head.val;
        this.head = this.head.next;
        if (this.head == null) this.tail = null;

        this.size --;
        return value;
    }

    /**
     * 返回对头的元素 但是不删除
     *
     * @return
     * @author lihh
     */
    public int front() {
        if (this.isEmpty()) return -1;
        return this.head.val;
    }
}
