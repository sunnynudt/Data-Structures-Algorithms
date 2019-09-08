/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 双指针法
 * 时间复杂度O(L)
 * 空间复杂度O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummyHead = new ListNode(0) // 哑节点
  dummyHead.next = head
  let first = dummyHead
  let second = dummyHead

  for (let i = 1; i <= n + 1; i++) {
    first = first.next
  }

  while (first !== null) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next

  return dummyHead.next
}
