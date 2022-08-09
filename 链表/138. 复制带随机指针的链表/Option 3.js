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

  let curr = head
  while (curr) {
    // 复制每个节点。构建新的节点插入到每个节点后面
    const newNode = new Node(curr.val, curr.next)
    curr.next = newNode
    curr = newNode.next
  }

  curr = head
  while (curr) {
    // 当前节点下个新节点的random = 当前节点random的下个节点
    if (curr.random != null) curr.next.random = curr.random.next
    curr = curr.next.next
  }

  curr = head
  const ans = head.next
  // 开始还原 链表 新节点 以及旧节点同时开始还原
  while (curr) {
    const next = curr.next
    if (next) curr.next = next.next
    curr = next
  }

  return ans
}
