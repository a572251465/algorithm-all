/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head

  let newHead = null,
    p = head

  // 1 2 3 4 5 => 5 4 3 2 1
  // 通过while循环 遍历节点
  while (p) {
    // 1. 获取第一个节点
    const firstNode = p
    // 2. 将当前p 设置为第二个节点
    p = p.next
    // 3. 设置第一个节点的next 是新头 (第一个是null)
    firstNode.next = newHead
    // 4. 给头节点 赋值
    newHead = firstNode
  }

  return newHead
}
