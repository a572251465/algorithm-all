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
  if (head.next === null) return

  let fast = head,
    slow = head
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  const reversal = (head) => {
    if (head === null || head.next === null) return head

    const newHead = reversal(head.next)
    head.next.next = head
    head.next = null

    return newHead
  }

  const temp = slow
  slow = reversal(slow.next)
  temp.next = null
  fast = head

  while (fast && slow) {
    const next = fast.next
    const currSlow = slow
    fast.next = currSlow
    slow = slow.next
    currSlow.next = next
    fast = next
  }
}
