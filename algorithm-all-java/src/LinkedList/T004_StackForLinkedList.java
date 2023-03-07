package LinkedList;

public class T004_StackForLinkedList {
    int size;
    ListNode<Integer> head;

    public static void main(String[] args) {
        T004_StackForLinkedList stack = new T004_StackForLinkedList();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        int value;
        while ((value = stack.pop()) != -1) System.out.println(value);
    }

    public int size() {
        return this.size;
    }

    public boolean isEmpty() {
        return this.size() == 0;
    }

    public void push(int value) {
        ListNode node = new ListNode(value);
        if (this.head == null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.size ++;
    }

    public int pop() {
        if (this.isEmpty()) return -1;
        int value = this.head.val;
        this.head = this.head.next;

        this.size --;
        return value;
    }

    public int peek() {
        if (this.isEmpty()) return -1;
        return this.head.val;
    }
}
