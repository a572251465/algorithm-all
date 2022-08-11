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
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null) return head

  let length = 0,
    p = head,
    last = null

  // 首先通过遍历 计算出整个链表的长度
  while (p) {
    length += 1
    last = p
    p = p.next
  }

  // 此处为了防止 出现链表的长度 > k
  k %= length
  // 如果旋转的次数是k的倍数的话 就不需要旋转 直接返回
  if (k === 0) return head

  p = head
  // 此处了旋转n次  到n的位置上 n就是头节点
  let moveSize = length - k
  while (moveSize-- > 1) p = p.next

  last.next = head
  head = p.next
  p.next = null

  return head
}
