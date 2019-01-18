function Queue() {
    let items = []

    this.enqueue = function(element) {
        items.push(element)
    }

    // 移除队列的第一项，并返回被移除的元素
    this.dequeue = function() {
        return items.shift()
    }

    // 返回队列中的第一个元素，队列不做任何变动
    this.front = function() {
        return items[0]
    }

    this.isEmpty = function() {
        return items.length == 0
    }

    this.size = function() {
        return items.length
    }

    this.print = function() {
        console.log(items.toString())
    }
}

// 优先队列
function PriorityQueue() {
    let items = []

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)

        if (this.isEmpty()) {
            items.push(queueElement)
            return
        }

        let added = false
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }

        if (!added) {
            items.push(queueElement)
        }
    }

    // 其他方法与上述类似
}

// 循环队列-击鼓传花(hot potato)
function hotPotato(nameList, num) {
    let queue = new Queue()

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    let eliminated = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + '在击鼓传花游戏中被淘汰。')
    }

    return queue.dequeue()
}

let names = ['A', 'B', 'C', 'D', 'E']
let winner = hotPotato(names, 7)
console.log('胜利者：' + winner)
