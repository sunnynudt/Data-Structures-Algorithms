/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 迭代法
 * 动画链接 https://cxyxiaowu.com/articles/2019/05/02/1556786658024.html
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  if (head === null || head.next === null) {
    return head
  }

  let prev = null
  let cur = head

  while (cur) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

/**
 * 递归法
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  // 递归结束条件
  if (head === null || head.next === null) {
    return head
  }

  // 递归反转 子链表
  let newReverseList = reverseList(head.next)
  // 获取原来链表的第2个节点newReverseListTail
  let newReverseListTail = head.next
  // 调整原来头结点和第2个节点的指向
  newReverseListTail.next = head
  head.next = null

  // 将调整后的链表返回
  return newReverseList
}
