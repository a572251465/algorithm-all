/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let aPrev = null,
    bNode = null

  const dummyHead = new ListNode(-1, list1)
  let i = -1,
    p = dummyHead

  while (p) {
    if (i === a - 1) aPrev = p
    if (i === b + 1) bNode = p

    i += 1
    p = p.next
  }

  p = list2
  while (p && p.next) p = p.next

  aPrev.next = list2
  p.next = bNode

  return dummyHead.next
}
