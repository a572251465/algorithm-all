/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  if (head === null) {
    return new Array(k).fill(head)
  }

  let length = 0
  let p = head
  while (p) {
    length += 1
    p = p.next
  }

  if (length <= k) {
    const res = new Array(k).fill(null)
    let i = 0
    p = head
    while (p) {
      const curr = p
      p = p.next
      curr.next = null
      res[i++] = curr
    }
    return res
  }

  // 表示计算出剩余的部分
  const res = []
  const diff = (length / k) | 0
  let surplus = length - k * diff
  const nums = new Array(k).fill(diff).map((item) => {
    const res = surplus-- <= 0 ? 0 : 1
    return item + res
  })

  p = head
  let i = 0
  while (p && i < nums.length) {
    let length = nums[i],
      // 保存一下 每次分组的第一个
      curr = p,
      prev = p
    while (p && length-- > 0) {
      prev = p
      p = p.next
    }

    prev.next = null
    i += 1
    res.push(curr)
  }

  return res
}
