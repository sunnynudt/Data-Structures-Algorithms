/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null && l2 === null) return null

  if (l1 && l2 === null) return l1
  if (l1 === null && l2) return l2

  let dummyHead = new ListNode(0)
  let cur = dummyHead
  let cur1 = l1
  let cur2 = l2

  while (cur1 !== null || cur2 !== null) {
    if (cur1 === null) {
      cur.next = cur2
      break
    }

    if (cur2 === null) {
      cur.next = cur1
      break
    }

    let val1 = cur1.val
    let val2 = cur2.val

    if (val1 > val2) {
      cur.next = new ListNode(val2)
      cur = cur.next
      cur2 = cur2.next
    } else {
      cur.next = new ListNode(val1)
      cur = cur.next
      cur1 = cur1.next
    }
  }

  return dummyHead.next
}
