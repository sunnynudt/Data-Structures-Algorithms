class LinkedListCycle {
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */

  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  hasCycle(head) {
    let fast = head
    let slow = head

    while (slow && fast && fast.next) {
      slow = slow.next
      fast = fast.next.next

      if (slow === fast) {
        return true
      }
    }

    return false
  }
}
