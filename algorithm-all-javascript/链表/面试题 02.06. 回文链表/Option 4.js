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

  let global = head
  const depthLinked = (head) => {
    if (head === null) return true

    const res = depthLinked(head.next)
    if (res === false) return false

    if (global.val !== head.val) return false
    global = global.next
  }

  return depthLinked(head) !== false
}
