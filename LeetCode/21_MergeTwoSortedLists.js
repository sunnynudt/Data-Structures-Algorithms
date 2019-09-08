/**
 * 合并两个有序链表
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */
class MergeTwoSortedLists {
  /**
   * 递归
   * 时间复杂度O(n+m)
   * 空间复杂度O(n+m)
   *
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  mergeTwoListsWithRecursion(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1

    if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
    } else {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
    }
  }

  /**
   * 迭代
   * 时间复杂度O(n+m)
   * 空间复杂度O(1)
   *
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  mergeTwoListsWithIteration(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1

    let dummyHead = new ListNode(0) // 哑节点
    let prev = dummyHead

    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        prev.next = l1
        l1 = l1.next
      } else {
        prev.next = l2
        l2 = l2.next
      }

      prev = prev.next
    }

    prev.next = l1 === null ? l2 : l1

    return dummyHead.next
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
