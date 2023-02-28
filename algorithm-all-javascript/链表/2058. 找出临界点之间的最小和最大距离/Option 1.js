/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  if (head === null || head.next === null || head.next.next === null)
    return [-1, -1]

  const res = []
  let p = head,
    i = 2
  while (p && p.next && p.next.next) {
    const prev = p,
      curr = p.next,
      next = p.next.next

    if (curr.val > prev.val && curr.val > next.val) {
      res.push(i)
    }
    if (curr.val < prev.val && curr.val < next.val) {
      res.push(i)
    }

    i += 1
    p = p.next
  }

  if (res.length <= 1) return [-1, -1]

  const max = res[res.length - 1] - res[0]
  let min = Infinity
  for (let j = 0; j < res.length - 1; j += 1) {
    const curr = res[j],
      next = res[j + 1]

    const diff = next - curr
    if (diff < min) min = diff
  }

  return [min, max]
}
