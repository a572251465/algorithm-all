/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return

  // 获取中间节点
  let fast = head,
    slow = head,
    prev = head

  // 1 2 3 4 5 6 7   1 2 3 4   5 6 7
  // 1 2 3 4 5 6      1 2 3 4   5 6
  while (fast && fast.next) {
    slow = slow.next
    prev = slow
    fast = fast.next.next
  }

  fast = head
  slow = slow.next
  prev.next = null
  prev = null

  // 反转链表
  const reversal = (head) => {
    if (head === null || head.next === null) return head
    let newHead = null,
      p = head

    // 4 5
    while (p) {
      const temp = p
      p = p.next
      temp.next = newHead
      newHead = temp
    }

    return newHead
  }

  slow = reversal(slow)

  // 1 2 3
  // 5 4
  // 通过循环 交叉插入
  while (slow) {
    const next = fast.next
    fast.next = slow
    prev = slow
    const slowPrev = slow.next
    slow.next = next
    slow = slowPrev
    fast = next
  }

  if (fast && prev) prev.next = fast
}
