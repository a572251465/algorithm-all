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
  if (head === null || head.next === null) return true

  // 表示链表反转
  const reversal = (head) => {
    let newHead = null,
      p = head

    while (p) {
      const temp = p
      p = p.next
      temp.next = newHead
      newHead = temp
    }

    return newHead
  }

  // 1 2 2 1
  // 1 2 3 2 1
  // 使用快慢指针 来移动指针。同时记录上一次的节点
  let fast = head,
    slow = head,
    preSlow = head
  while (fast && fast.next) {
    fast = fast.next.next
    preSlow = slow
    slow = slow.next
  }
  const bak = slow

  slow = reversal(slow)
  fast = head

  // 节点反转后，从头开始比较
  let status = true
  while (slow) {
    if (slow.val !== fast.val) {
      status = false
      break
    }
    slow = slow.next
    fast = fast.next
  }

  // 表示还原链表
  preSlow.next = reversal(bak)
  return status
}
