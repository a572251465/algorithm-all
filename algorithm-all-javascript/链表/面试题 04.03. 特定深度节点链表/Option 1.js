/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  if (tree === null) return []

  const res = []

  const dfs = (treeArr = []) => {
    if (treeArr.length <= 0) return

    const newTree = []
    const dummyHead = new ListNode(-1)

    let item,
      p = dummyHead
    while ((item = treeArr.shift())) {
      if (item.left) newTree.push(item.left)
      if (item.right) newTree.push(item.right)

      p.next = new ListNode(item.val)
      p = p.next
    }

    if (dummyHead.next) res.push(dummyHead.next)
    dfs(newTree)
  }
  dfs([tree])

  return res
}
