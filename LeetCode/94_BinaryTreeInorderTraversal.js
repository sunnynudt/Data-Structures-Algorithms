/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * TODO: 二叉树的遍历，考核重点是非递归实现
 * 基于栈，迭代实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return []

  let stask = [root]
  let result = []
  let popItem = null
  let left = root.left

  while (left) {
    stask.push(left)
    left = left.left
  }

  while ((popItem = stask.pop())) {
    result.push(popItem.val)
    let cur = popItem.right

    while (cur) {
      stask.push(cur)
      cur = cur.left
    }
  }

  return result
}

/**
 * 如果数据规模较小，建议使用递归实现
 * 递归写法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return []

  const left = root.left ? inorderTraversal(root.left) : []
  const right = root.right ? inorderTraversal(root.right) : []

  return [...left, root.val, ...right]
}
