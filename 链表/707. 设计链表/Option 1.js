function ListNode(val, next, prev) {
  this.val = typeof val !== 'undefined' ? val : undefined
  this.next = typeof next !== 'undefined' ? next : null
  this.prev = typeof prev !== 'undefined' ? prev : null
}

var MyLinkedList = function () {
  this.head = null
  this.tail = null
  this.size = 0
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1

  let p = this.head
  while (index-- > 0) p = p.next

  return p.val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val)
  if (this.head === null) {
    this.head = this.tail = node
  } else {
    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  this.size += 1
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val)

  if (this.head === null) {
    this.head = this.tail = node
  } else {
    let p = this.head
    while (p && p.next) p = p.next

    node.prev = p
    p.next = node
    this.tail = node
  }

  this.size += 1
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) return

  if (index === this.size) return this.addAtTail(val)

  if (index <= 0) return this.addAtHead(val)

  const node = new ListNode(val)

  let p = this.head,
    i = index
  // 1 2 3 4
  while (i-- > 0) p = p.next

  const prev = p.prev
  node.next = p
  p.prev = node

  node.prev = prev
  prev.next = node
  this.size += 1
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return

  let p = this.head,
    i = index
  while (i-- > 0) p = p.next

  if (index === 0) {
    this.head = this.head.next
    if (this.head) this.head.prev = null
  } else if (index === this.size - 1) {
    this.tail = this.tail.prev
    this.tail.next = null
  } else {
    p.prev.next = p.next
    p.next.prev = p.prev
  }

  if (this.head === null) this.tail = null

  this.size -= 1
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
