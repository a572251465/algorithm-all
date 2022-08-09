# 反转指定位置的链表

## 思路

- 首先找到反转链表，开始位置的前一个节点
- 编写反转链表的方法。但是跟以往方法不同，因为需要反转到指定位置
- 传统的反转链表

```js
head.next.next = head
head.next = null
```

- 反转指定位置
  > 意味着结束位置后面的节点，会连接反转后的尾节点

```js
const suffix = head.next.next
head.next.next = head
head.next = suffix
```

- 利用第一步的前节点 连接反转后的节点

## 时间复杂度

> O(n)

- 对链表进行了一次遍历。以及中间部分的反转。去除常数系数，时间复杂度就是 O(n)

## 空间复杂度

> O(1)
