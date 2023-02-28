function Node(val, next = null) {
  this.val = val
  this.next = next
}

var MyHashSet = function () {
  this.head = null
  this.size = 0
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.contains(key)) return

  const node = new Node(key)
  if (this.head === null) {
    this.head = node
  } else {
    let p = this.head
    while (p && p.next) p = p.next
    p.next = node
  }

  this.size += 1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.size === 0) return

  if (this.head.val === key) {
    this.head = this.head.next
    this.size -= 1
    return
  }

  let p = this.head,
    prev = this.head

  while (p) {
    if (p.val === key) break

    prev = p
    p = p.next
  }
  if (prev.next === null) return

  prev.next = prev.next.next
  this.size -= 1
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  if (this.size === 0) return false

  let p = this.head
  while (p) {
    if (p.val === key) return true
    p = p.next
  }

  return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
