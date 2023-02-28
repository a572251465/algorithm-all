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
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head

  // -101 1 2 3 3 4 4 5
  const dummyHead = new ListNode(-101, head)
  let p = dummyHead,
    prev = dummyHead,
    // 这个用来表示 上次的判断是否相等
    isSameFlag = false

  // -101 1 2 3 3 4 4 5
  while (p && p.next && p.next.next) {
    const item = p.next.val
    const item1 = p.next.next.val

    if (item === item1) {
      // 如果两者相等 直接设置为true 同时删除下一个节点
      isSameFlag = true
      p.next = p.next.next
    } else {
      if (isSameFlag) {
        // 如果判断相等的话 直接删除节点。 同时将flag 重置
        p.next = p.next.next
        isSameFlag = false
      } else {
        p = p.next
      }
    }
  }

  if (isSameFlag) p.next = p.next.next

  return dummyHead.next
}
