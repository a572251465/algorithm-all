function ListNode(key, value, next = null) {
  this.key = key
  this.value = value
  this.next = next
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.length = capacity
  this.size = 0
  this.head = null
  this.context = {}
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.size === 0) return -1

  const value = this.context[key]
  if (typeof value === 'undefined') return -1

  this.put(key, value)
  return value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  debugger
  const node = new ListNode(key, value)
  if (this.head === null) {
    this.head = node
    this.context[key] = value
    this.size += 1
    return
  }

  let curr = this.head,
    prev = this.head
  while (curr) {
    if (curr.key === key) break
    prev = curr
    curr = curr.next
  }

  if (curr === null) {
    if (this.size === this.length) {
      let curr = this.head,
        prev = this.head
      while (curr && curr.next) {
        prev = curr
        curr = curr.next
      }

      if (curr === prev) {
        this.head = null
      } else {
        prev.next = curr.next
      }
      Reflect.deleteProperty(this.context, curr.key)
      this.size -= 1
    }

    node.next = this.head
    this.head = node
    this.context[key] = value
    this.size += 1
  } else {
    this.context[key] = value
    curr.value = value
    if (curr === this.head) return

    prev.next = curr.next
    curr.next = this.head
    this.head = curr
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
//     console.log(c[item](...b[i]))
//   }
// }
