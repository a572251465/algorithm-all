/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null || head.next === null) return head

  // 此列表为了留下 < x的节点
  const dummyHead = new ListNode(-201, head)
  let p = dummyHead

  // 此链表为了保存 >= x的节点
  const dummyHead1 = new ListNode(-201)
  let p1 = dummyHead1

  while (p && p.next) {
    if (p.next.val >= x) {
      p1.next = p.next
      p1 = p1.next

      p.next = p.next.next
      p1.next = null
    } else {
      p = p.next
    }
  }

  p.next = dummyHead1.next
  return dummyHead.next
}
