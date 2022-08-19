/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) return head

  const dummyHead = new ListNode(-1, head)

  const dfs = (head) => {
    if (head === null || head === undefined) return

    dfs(head.next)

    --n
    if (n === -1) {
      head.next = head.next.next
    }
  }
  dfs(dummyHead)

  return dummyHead.next
}
