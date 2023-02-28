/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) return head

  const map = new Map()
  let curr = head

  while (curr) {
    // 记录下 旧链表节点 以及新节点关系
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }

  curr = head
  while (curr) {
    // 1. 根据原来旧节点 获取生成的新节点
    // 2. 去map中 查找next/ random节点。设置给新节点
    const node = map.get(curr)
    node.next = curr.next ? map.get(curr.next) : null
    node.random = map.get(curr.random)
    curr = curr.next
  }

  return map.get(head)
}
