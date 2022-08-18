/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let max = -Infinity,
    p = head
  const dfs = (head) => {
    if (head === null) return

    dfs(head.next)
    const curr = head.val + p.val
    max = curr > max ? curr : max

    p = p.next
  }

  dfs(head)
  return max
}
