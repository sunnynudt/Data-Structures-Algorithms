class CircularLinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(element) {
    let node = new Node(element)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      // 循环列表，最后一个元素指向head，而不是null
      while (current.next !== this.head) {
        current = current.next
      }

      current.next = node
    }

    node.next = this.head
    this.length++
  }

  insert(position, element) {
    if (position < 0 || position > this.length) {
      return false
    }

    let node = new Node(element)
    let current = this.head
    let previous
    let index = 0

    if (position === 0) {
      node.next = current

      while (current.next !== this.head) {
        current = current.next
      }

      this.head = node
      current.next = this.head
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      node.next = current
      previous.next = node

      if (node.next === null) {
        // 在最后一个元素更新
        node.next = this.head
      }
    }

    this.length++

    return true
  }

  removeAt(position) {
    if (position < 0 || position > this.length) {
      return null
    }

    let current = this.head
    let previous
    let index = 0

    if (position === 0) {
      while (current.next !== this.head) {
        current = current.next
      }

      this.head = this.head.next
      current.next = this.head // 更新最后一项
    } else {
      while (index++ < position) {
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this.length--

    return current.element
  }

  remove(element) {
    let index = this.indexOf(element)

    return this.removeAt(index)
  }

  indexOf(element) {
    let current = this.head
    let index = -1

    if (element === current.element) {
      return 0
    }

    index++

    // 检查列表中间
    while (current.next !== this.head) {
      if (element === current.element) {
        return index
      }

      current = current.next
      index++
    }

    // 检查最后一项
    if (element === current.element) {
      return index
    }

    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head
  }

  toString() {
    let current = this.head
    let element = current.element

    while (current.next !== this.head) {
      current = current.next
      element = ', ' + current.element
    }

    return element.toString()
  }

  print() {
    console.log(this.toString())
  }
}

class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}
