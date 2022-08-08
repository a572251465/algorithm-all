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

  let current = head
  const depthResolveLinked = (head) => {
    if (head === null) return true

    const res = depthResolveLinked(head.next)
    if (res === false) return false

    if (current.val !== head.val) return false

    current = current.next
  }

  return depthResolveLinked(head) !== false
}
