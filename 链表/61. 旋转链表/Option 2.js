var rotateRight = function (head, k) {
  // 此处表示临界点处理
  if (k === 0 || !head || !head.next) {
    return head
  }

  // 通过遍历 计算出链表长度 以及计算出最后一个节点
  let n = 1
  let cur = head
  while (cur.next) {
    cur = cur.next
    n++
  }

  // 判断旋转的个数 是否跟k 是成倍的关系
  let add = n - (k % n)
  if (add === n) {
    return head
  }

  // 将链表 连接 成为环
  cur.next = head
  while (add) {
    cur = cur.next
    add--
  }

  // 将环断开
  const ret = cur.next
  cur.next = null
  return ret
}
