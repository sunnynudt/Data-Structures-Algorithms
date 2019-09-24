class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }

  append(element) {
    let node = new Node(element)
    let current

    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      // 找到列表最后一项
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    this.length++
  }

  insert(position, element) {
    // 检查越界
    if (position < 0 || position > this.length) {
      return false
    }

    let node = new Node(element)
    let current = this.head
    let previous
    let index = 0

    if (position === 0) {
      node.next = current
      this.head = node
    } else {
      // 在中间或尾部添加
      while (index++ < position) {
        previous = current
        current = current.next
      }

      node.next = current
      previous.next = node
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
      this.head = current.next
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
    let index = 0

    while (current) {
      if (element === current.element) {
        return index
      }

      index++
      current = current.next
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
    let string = ''

    while (current) {
      string += current.element
      current = current.next
    }

    return string
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
