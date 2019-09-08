/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (head === null) return head

  if (n <= 0) return head

  let cur = head
  let cur2 = head
  let target = head
  let prev = head
  let index = 0

  while (cur) {
    if (index === n) {
      target = cur
      break
    }

    cur = cur.next
    index++
  }

  if (cur === null) {
    return head.next
  }

  while (target) {
    prev = cur2
    cur2 = cur2.next
    target = target.next
  }

  prev.next = cur2.next

  return head
}
