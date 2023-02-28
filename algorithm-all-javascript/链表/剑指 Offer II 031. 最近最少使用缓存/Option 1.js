function ListNode(key, value, next = null) {
  this.key = key
  this.value = value
  this.next = next
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.size = capacity
  this.head = null
  this.length = 0
  this.context = {}
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.length === 0 || typeof this.context[key] === 'undefined') return -1

  const value = this.context[key]
  this.put(key, value)
  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new ListNode(key, value)
  // 如果从来没有头节点
  if (this.head === null) {
    this.head = node
    this.context[key] = value
    this.length += 1
    return
  }

  this.context[key] = value
  // 通过以下循环 来判断是否有值存在
  let curr = this.head,
    prev = this.head
  while (curr) {
    if (curr.key === key) break

    prev = curr
    curr = curr.next
  }

  if (curr === null) {
    // 判断是否已经满了
    if (this.length === this.size) {
      let curr = this.head,
        prev = this.head
      while (curr && curr.next) {
        prev = curr
        curr = curr.next
      }
      Reflect.deleteProperty(this.context, curr.key)
      if (curr === prev) {
        this.head = null
      } else {
        prev.next = null
      }
      this.length -= 1
    }
    node.next = this.head
    this.head = node
    this.length += 1
    return
  }

  if (this.head === curr) {
    this.head.value = value
    return
  }

  const temp = curr
  prev.next = curr.next
  temp.value = value
  temp.next = this.head
  this.head = temp
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const a = [
  'LRUCache',
  'put',
  'put',
  'get',
  'put',
  'get',
  'put',
  'get',
  'get',
  'get'
]
const b = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

let c
a.forEach((item, key) => {
  if (item === 'LRUCache') {
    c = new LRUCache(b[key][0])
  } else {
    debugger
    console.log(c[item](...b[key]))
  }
})
