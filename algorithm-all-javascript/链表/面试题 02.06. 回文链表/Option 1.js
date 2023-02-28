/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 表示如果没有节点 或是只有一个节点的话 就是回文链表
  if (!head || head.next === null) return true

  // 1 2 2 1
  // 1 2 3 2 1
  // 1 0 0

  // 1. 通过快慢指针的小技巧，可以获取到中间节点
  const stack = []
  let fast = head,
    slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  // 2. 将慢指针的其余的节点 添加到栈中
  while (slow) {
    stack.push(slow.val)
    slow = slow.next
  }

  // 3. 重新将快指针指向头部，通过栈的特性(先进后出) 跟链表节点进行比较 如果一直相等表示就是回文数
  let item
  fast = head
  while ((item = stack.pop()) !== undefined) {
    if (fast.val === item) {
      fast = fast.next
    } else {
      return false
    }
  }

  return true
}
