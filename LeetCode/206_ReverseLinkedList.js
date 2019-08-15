class ReverseLinkedList {
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */
  /**
   * 动画链接 https://cxyxiaowu.com/articles/2019/05/02/1556786658024.html
   * @param {ListNode} head
   * @return {ListNode}
   */
  reverseList(head) {
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
}
