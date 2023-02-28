/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true

  const arr = []
  let p = head

  while (p) {
    arr.push(p.val)
    p = p.next
  }

  let front = 0,
    tail = arr.length - 1

  // [1,2,1]
  // [1,1,2,2]
  while (front <= tail) {
    const frontItem = arr[front],
      tailItem = arr[tail]

    if (frontItem !== tailItem) return false
    front += 1
    tail -= 1
  }

  return true
}
