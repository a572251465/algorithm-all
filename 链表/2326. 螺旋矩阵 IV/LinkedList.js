class Node {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.length += 1
      return true
    }

    let current = this.head
    while (current && current.next) current = current.next
    current.next = node
    this.length += 1
    return true
  }
}

module.exports = LinkedList
