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
var reverseEvenLengthGroups = function (head) {
  if (head === null || head.next === null) return head

  let prev = head,
    p = head

  const reversal = (head, count) => {
    if (head === null || head.next === null || count === 1) return head

    const newHead = reversal(head.next, count - 1)
    const next = head.next.next
    head.next.next = head
    head.next = next
    return newHead
  }

  let initialNum = 1
  while (p) {
    let p1 = p,
      length = 0
    while (p1) {
      length += 1
      p1 = p1.next
    }

    if (
      initialNum % 2 === 0 &&
      (length >= initialNum || (length < initialNum && length % 2 === 0))
    ) {
      prev.next = reversal(p, initialNum)
      p = prev.next
    } else {
      if (length < initialNum && length % 2 === 0) {
        prev.next = reversal(p, length)
        p = prev.next
      }
    }

    let startIndex = initialNum
    while (p && startIndex-- > 0) {
      prev = p
      p = p.next
    }

    initialNum += 1
  }

  return head
}
