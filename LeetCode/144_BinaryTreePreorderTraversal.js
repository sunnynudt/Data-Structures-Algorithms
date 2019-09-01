/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树的前序遍历，递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  if (root === null) return []

  const left = root.left ? preorderTraversal(root.left) : []
  const right = root.right ? preorderTraversal(root.right) : []

  return [root.val, ...left, ...right]
}
