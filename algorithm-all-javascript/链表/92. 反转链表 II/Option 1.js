/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  // 首先 判断下是否是空节点 或是 只有一个节点
  if (head === null || head.next === null) return head

  const dummyHead = new ListNode(-1, head)
  let prev = dummyHead

  // 表示链表反转
  const reversal = (head, count) => {
    if (head === null || head.next === null || count === 1) return head

    const newHead = reversal(head.next, count - 1)
    const suffix = head.next.next

    head.next.next = head
    head.next = suffix

    return newHead
  }

  let size = left
  // 计算 反转开始节点的 上一个节点
  while (--size > 0) prev = prev.next

  // 表示将链表反转
  prev.next = reversal(prev.next, right - left + 1)

  return dummyHead.next
}
