function LinkedNode(key, value, next = null, prev = null) {
  this.key = key
  this.value = value
  this.next = next
  this.prev = prev
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.length = capacity
  this.head = null
  this.tail = null
  this.context = {}
  this.size = 0
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.size === 0) return -1
  const node = this.context[key]
  if (node === undefined) return -1

  this.put(key, node.value)
  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // 获取对应的元素节点
  let node = this.context[key]

  // 判断是否满员
  if (this.size === this.length && node === undefined) {
    const lastNode = this.context[this.tail]
    Reflect.deleteProperty(this.context, this.tail)
    if (lastNode.prev) {
      this.tail = lastNode.prev.key
      lastNode.prev.next = null
    }
    this.size -= 1

    if (this.size === 0) {
      this.head = null
      this.tail = null
      this.prev = null
    }
  }

  if (node === undefined) {
    node = new LinkedNode(key, value)

    let prev = this.context[this.head]
    if (this.head === null) {
      this.tail = key
    } else {
      node.next = prev
      prev.prev = node
    }
    this.context[key] = node
    this.head = key
    this.size += 1
  } else {
    node.value = value
    if (key === this.head) return

    // 说明是最后一个节点
    // 1 2 3 4 5
    if (key === this.tail) {
      this.tail = node.prev.key
      node.prev.next = null
      node.prev = null
    } else {
      node.prev.next = node.next
      node.next.prev = node.prev
    }

    // 获取头部node
    const headNode = this.context[this.head]
    node.prev = null
    node.next = headNode
    headNode.prev = node
    this.head = key
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const a = [
//   'LRUCache',
//   'put',
//   'put',
//   'get',
//   'put',
//   'get',
//   'put',
//   'get',
//   'get',
//   'get'
// ]
// const b = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
//
// let c
// for (let i = 0; i < a.length; i += 1) {
//   const item = a[i]
//   if (item === 'LRUCache') {
//     c = new LRUCache(...b[i])
//   } else {
//     c[item](...b[i])
//   }
// }
