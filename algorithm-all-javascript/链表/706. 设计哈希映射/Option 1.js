function Node(key, value, next = null) {
  this.key = key
  this.value = value
  this.next = next
}

var MyHashMap = function () {
  this.head = null
  this.size = 0
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  if (this.get(key) !== -1) {
    let p = this.head
    while (p) {
      if (p.key === key) break
      p = p.next
    }

    p.value = value
    return
  }

  const node = new Node(key, value)

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
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.size === 0) return -1

  let p = this.head
  while (p) {
    if (p.key === key) break
    p = p.next
  }

  return p === null ? -1 : p.value
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  if (this.size === 0) return

  if (this.head.key === key) {
    this.head = this.head.next
    this.size -= 1
    return
  }

  let p = this.head,
    prev = this.head
  while (p) {
    if (p.key === key) break

    prev = p
    p = p.next
  }
  if (prev.next === null) return

  prev.next = prev.next.next
  this.size -= 1
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
