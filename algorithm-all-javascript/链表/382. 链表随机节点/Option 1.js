/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.arr = []
  let p = head

  while (p) {
    this.arr.push(p.val)
    p = p.next
  }
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  const len = this.arr.length
  return this.arr[(Math.random() * len) | 0]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
