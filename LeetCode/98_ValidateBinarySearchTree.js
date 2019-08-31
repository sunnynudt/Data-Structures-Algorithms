/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * BST中序遍历获得的数组为升序
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) return true

  if (root && root.left === null && root.ritht === null) return

  // 利用递归获得中序遍历的数组
  // TODO: 可以用栈实现非递归的中序遍历
  let inorderTraversal = function(root) {
    if (root === null) return []

    const left = root.left ? inorderTraversal(root.left) : []
    const right = root.right ? inorderTraversal(root.right) : []

    return [...left, root.val, ...right]
  }

  let arr = inorderTraversal(root)

  // 查看是否有逆序对，如果没有，则为升序数组
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    }
  }

  return true
}
