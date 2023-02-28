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
  let p = head

  // 核心思想：正向遍历链表，数组逆序添加值
  while (p) {
    arr.unshift(p.val)
    p = p.next
  }

  return arr
}
