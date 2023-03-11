package LinkedList.T009_LeetCode_23_MergeKLists;

// https://leetcode.cn/problems/merge-k-sorted-lists/

import LinkedList.ListNode;

import java.util.Comparator;
import java.util.PriorityQueue;

public class Option001 {
    public ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;
        if (lists.length == 1) return lists[0];

        PriorityQueue<ListNode> priorityQueue = new PriorityQueue<>(new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
                return (int) o1.val - (int) o2.val;
            }
        });
        ListNode dummy = new ListNode();
        ListNode newHead = dummy;
        for (Integer i = 0; i < lists.length; i += 1) if (lists[i] != null) priorityQueue.add(lists[i]);

        while (!priorityQueue.isEmpty()) {
            ListNode currNode = priorityQueue.poll();
            newHead.next = new ListNode(currNode.val);
            newHead = newHead.next;

            if (currNode.next != null) priorityQueue.add(currNode.next);
        }
        return dummy.next;
    }
}
