function ListNode(val, next) {
  this.val = typeof val !== 'undefined' ? val : undefined
  this.next = typeof next !== 'undefined' ? next : null
}

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.length = k
  this.size = 0
  this.head = this.tail = null
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  const node = new ListNode(value)

  if (this.head === null) {
    this.head = this.tail = node
    this.size += 1
  } else {
    this.tail.next = node
    this.tail = this.tail.next
    this.size += 1
  }

  return true
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false

  this.head = this.head.next
  this.size -= 1
  return true
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1

  return this.head.val
}

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1

  return this.tail.val
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0
}

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.length
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
