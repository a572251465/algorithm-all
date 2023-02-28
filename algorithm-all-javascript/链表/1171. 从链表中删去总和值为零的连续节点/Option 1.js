/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  if (head === null || (head.val === 0 && head.next === null)) return null

  const dummyHead = new ListNode(-1, head)
  p = dummyHead

  while (p) {
    let curr = p.next
    let sum = 0,
      skipFlags = false
    while (curr) {
      sum += curr.val
      if (sum === 0) {
        p.next = curr.next
        skipFlags = true
        break
      }

      curr = curr.next
    }

    if (!skipFlags) {
      p = p.next
    } else {
      skipFlags = false
    }
  }

  return dummyHead.next
}
