/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 二叉树后序遍历，递归方法
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (root === null) return []

  const left = root.left ? postorderTraversal(root.left) : []
  const right = root.right ? postorderTraversal(root.right) : []

  return [...left, ...right, root.val]
}
