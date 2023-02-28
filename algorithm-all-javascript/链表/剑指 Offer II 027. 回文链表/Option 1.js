/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true

  const reversal = (head) => {
    let p = head,
      newHead = null

    while (p) {
      const temp = p
      p = p.next
      temp.next = newHead
      newHead = temp
    }

    return newHead
  }

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

  let status = true
  while (slow) {
    if (slow.val !== fast.val) {
      status = false
      break
    }

    slow = slow.next
    fast = fast.next
  }

  preSlow.next = reversal(bak)
  return status
}
