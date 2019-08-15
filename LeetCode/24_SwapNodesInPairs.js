class SwapNodesInPairs {
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
  swapPairs(head) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head
    let current = dummyHead

    while (current.next !== null && current.next.next !== null) {
      let node1 = current.next
      let node2 = current.next.next

      node1.next = node2.next
      node2.next = node1
      current.next = node2

      current = current.next.next
    }

    return dummyHead.next
  }
}
