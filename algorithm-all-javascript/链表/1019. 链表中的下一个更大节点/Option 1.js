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
var nextLargerNodes = function (head) {
  if (head.next === null) return [0]

  const res = []
  let maxValue = []

  const preMaxValue = (curr) => {
    const item = maxValue.find((item) => item > curr)
    return item ? item : 0
  }

  const dfs = (head) => {
    if (head && head.next === null) {
      maxValue.unshift(head.val)
      res.unshift(0)
      return
    }
    dfs(head.next)

    res.unshift(preMaxValue(head.val))
    maxValue.unshift(head.val)
  }

  dfs(head)
  return res
}
