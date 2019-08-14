class ReverseLinkedList {
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
    let tmp = null
    let newHead = null

    while (head) {
      tmp = head
      head = head.next
      tmp.next = newHead
      newHead = tmp
    }

    return newHead
  }
}
