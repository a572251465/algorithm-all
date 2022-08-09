/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const arr = []

  const depthLinked = (head) => {
    if (head === null) return

    depthLinked(head.next)
    arr.push(head.val)
  }
  depthLinked(head)

  return arr
}
