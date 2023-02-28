var connect = function (root) {
  if (root === null) {
    return root;
  }

  // 初始化队列同时将第一层节点加入队列中，即根节点
  const Q = [root];

  // 外层的 while 循环迭代的是层数
  while (Q.length > 0) {
    // 记录当前队列大小
    const size = Q.length;

    // 遍历这一层的所有节点
    for (let i = 0; i < size; i++) {
      // 从队首取出元素
      const node = Q.shift();

      // 连接
      if (i < size - 1) {
        node.next = Q[0];
      }

      // 拓展下一层节点
      if (node.left !== null) {
        Q.push(node.left);
      }
      if (node.right !== null) {
        Q.push(node.right);
      }
    }
  }

  // 返回根节点
  return root;
};
