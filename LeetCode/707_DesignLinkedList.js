/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
  this.head = null
  this.length = 0
}

function Node(val) {
  this.val = val
  this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) {
    return -1
  }

  let cur = this.head
  let pos = 0

  while (cur) {
    if (pos === index) {
      return cur.val
    }

    cur = cur.next
    pos++
  }

  return -1
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let node = new Node(val)
  node.next = this.head
  this.head = node
  this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = new Node(val)

  if (this.head === null) {
    this.head = node
    this.length++
    return
  }

  let cur = this.head

  while (cur) {
    if (cur.next === null) {
      cur.next = node
      this.length++
      return
    }

    cur = cur.next
  }
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0) {
    this.addAtHead(val)
    return
  }

  if (index > this.length) {
    return
  }

  if (index === this.length) {
    this.addAtTail(val)
    return
  }

  if (index === 0) {
    this.addAtHead(val)
    return
  }

  if (index > 0 && index < this.length) {
    let node = new Node(val)
    let pos = 0
    let cur = this.head
    let prev = this.head

    while (cur) {
      if (pos === index) {
        node.next = cur
        prev.next = node
        this.length++
        return
      }

      pos++
      prev = cur
      cur = cur.next
    }
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length) {
    return
  }

  if (index === 0) {
    this.head = this.head.next
    this.length--
    return
  }

  let cur = this.head
  let prev = this.head
  let pos = 0

  while (cur) {
    if (pos === index) {
      prev.next = cur.next
      this.length--
      return
    }

    pos++
    prev = cur
    cur = cur.next
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
