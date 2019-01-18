function Stack() {
    let items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function() {
        return items.pop()
    }

    // 返回栈顶元素，不对栈做任何修改
    this.peek = function() {
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        return items.length == 0
    }

    this.size = function() {
        return items.length
    }

    this.clear = function() {
        items = []
    }

    this.print = function() {
        console.log(items.toString())
    }
}

function divideBy2(decNumber) {
    const remStack = new Stack()
    let rem
    let binaryString = ''

    while (decNumber > 0) {
        rem = Math.floor(decNumber % 2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber / 2)
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString()
    }

    return binaryString
}

console.log(divideBy2(1)) // 1
console.log(divideBy2(2)) // 10
console.log(divideBy2(5)) // 101
console.log(divideBy2(10)) // 1010
console.log(divideBy2(1000)) // 1111101000
