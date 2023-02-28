/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  if (head === null) return 0

  let count = 0,
    p = head,
    existFlag = false

  while (p) {
    const val = p.val
    if (nums.includes(val)) {
      existFlag = true
    } else {
      if (existFlag) count += 1
      existFlag = false
    }

    p = p.next
  }

  if (existFlag) count += 1

  return count
}
