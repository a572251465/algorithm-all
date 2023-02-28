/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null
  if (list1 === null) return list2
  if (list2 === null) return list1

  let p1 = list1,
    p2 = list2
  // 利用虚拟节点来避免头节点的判断
  const dummyHead = new ListNode(-1)
  let curr = dummyHead

  while (p1 && p2) {
    if (p1.val < p2.val) {
      curr.next = p1
      p1 = p1.next
    } else {
      curr.next = p2
      p2 = p2.next
    }
    curr = curr.next
  }

  if (p1) curr.next = p1
  if (p2) curr.next = p2

  return dummyHead.next
}
