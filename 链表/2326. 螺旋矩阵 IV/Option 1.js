// const LinkedList = require('./LinkedList')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  debugger
  const arr = Array.from({ length: m }).map(() =>
    Array.from({ length: n }).map(() => -1)
  )

  let p = head,
    next = null
  const loop = (pos, x, y) => {
    if (p === null) return
    switch (pos) {
      case 'left':
        next = arr[x][y]
        while (p && next === -1) {
          arr[x][y++] = p.val
          p = p.next
          next = arr[x][y]
        }
        if (p === null) return

        loop('bottom', x + 1, y - 1)
        break

      case 'bottom':
        next = arr[x][y]
        while (p && next === -1) {
          arr[x++][y] = p.val
          p = p.next
          if (Array.isArray(arr[x])) {
            next = arr[x][y]
          } else {
            break
          }
        }
        if (p === null) return

        loop('right', x - 1, y - 1)
        break

      case 'right':
        next = arr[x][y]
        while (p && next === -1) {
          arr[x][y--] = p.val
          p = p.next
          next = arr[x][y]
        }
        if (p === null) return

        loop('top', x - 1, y + 1)
        break

      case 'top':
        next = arr[x][y]
        while (p && next === -1) {
          arr[x--][y] = p.val
          p = p.next
          next = arr[x][y]
        }
        if (p === null) return

        loop('left', x + 1, y + 1)
        break
    }
  }

  loop('left', 0, 0)
  return arr
}

// const instance = new LinkedList()
// ;[3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0].forEach((item) => {
//   instance.append(item)
// })
// console.log(spiralMatrix(3, 5, instance.head))
