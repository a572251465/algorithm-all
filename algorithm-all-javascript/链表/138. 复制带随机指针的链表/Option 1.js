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

  const hashTable = new Map(),
    hashTableMutex = new Map(),
    hashTableMutex1 = new Map()
  let p = head

  // 遍历原来的链表。记录下每个节点以及random的关系
  while (p) {
    hashTable.set(p, p.random)
    p = p.next
  }

  // 利用虚拟节点的技巧 来构建新的链表
  const dummyHead = new Node(-1)
  let curr = dummyHead
  p = head
  while (p) {
    const newNode = new Node(p.val)
    // 记录下新的节点 以及原来节点的关系 相互记忆
    hashTableMutex.set(newNode, p)
    hashTableMutex1.set(p, newNode)
    curr.next = newNode
    curr = curr.next
    p = p.next
  }

  curr = dummyHead.next
  while (curr) {
    // 遍历新的链表
    // 1. 根据新节点 查询对应的原来的节点p
    // 2. 根据查询到的节点p 查询保存的随机节点
    // 3. 根据随机节点 查询新的random节点 保存random节点
    const random = hashTable.get(hashTableMutex.get(curr))
    curr.random = hashTableMutex1.get(random)
    curr = curr.next
  }

  return dummyHead.next
}
