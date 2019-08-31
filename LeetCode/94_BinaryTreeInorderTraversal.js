/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
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

/**
 * TODO:非递归写法，用栈来实现
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {}
