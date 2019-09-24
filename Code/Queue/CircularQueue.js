/**
 * 使用数组实现队列，为了入队操作方便，把队尾位置规定为最后入队元素的下一个位置。
 * 实现循环队列时，(队尾指针+1) % 数组长度 = 队头下标，代表队列已满。
 *
 * @class CircularQueue
 */
class CircularQueue {
  constructor(capacity = 0) {
    this.array = new Array(capacity)
    this.front = 0
    this.rear = 0
    this.length = this.array.length
  }

  enQueue(element) {
    if ((this.rear + 1) % this.length === this.front) {
      throw new Error('队列已满!')
    }

    this.array[this.rear] = element
    this.rear = (this.rear + 1) % this.length
  }

  deQueue() {
    if (this.rear === this.front) {
      throw new Error('队列已空!')
    }

    const deQueueElement = this.array[this.front]
    this.front = (this.front + 1) % this.length

    return deQueueElement
  }

  output() {
    for (let i = this.front; i !== this.rear; i = (i + 1) % this.length) {
      console.log(this.array[i])
    }
  }
}
