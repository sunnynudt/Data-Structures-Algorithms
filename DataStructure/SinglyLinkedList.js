/**
 * 学习JavaScript数据结构和算法 第5章
 **/

function LinkedList() {
    /**
     * 一个Node辅助类
     * Node类表示要加入列表的项
     * 包含一个element属性，即要添加到列表的值；一个next属性，即指向下一个节点项的指针
     * @param element
     * @constructor
     */
    var Node = function(element) {
        this.element = element
        this.next = null
    }

    /**
     * 存储列表项的数量的length属性，内部/私有变量
     * @type {number}
     */
    var length = 0

    /**
     * 重要的一点：需要存储第一个节点的引用。为此，可以把这个引用存储在一个head变量中
     * @type {null}
     */
    var head = null

    /**
     * 向链表尾部添加一个新的项
     * 2种场景：1. 列表为空，添加的是第一个元素；2. 列表不为空，向其追加元素；
     * @param element
     */
    this.append = function(element) {
        var node = new Node(element)
        var current
        if (head == null) {
            // 列表中第一个节点
            head = node
        } else {
            current = head
            // 循环列表，直到找到最后一项
            while (current.next) {
                current = current.next
            }
            // 找到最后一项，将其next赋为node，建立链接
            current.next = node
        }
        length++ // 更新列表的长度
    }

    /**
     * 向列表的特定位置插入一个新的项
     * @param position
     * @param element
     */
    this.insert = function(position, element) {
        // 检查越界值
        if (position > -1 && position <= length) {
            var node = new Node(element)
            var current = head
            var previous
            var index = 0

            if (position === 0) {
                // 在第一个位置上添加
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    /**
     * 从列表特定位置移除一项
     * @param position
     */
    this.removeAt = function(position) {
        // 检查越界值
        if (position > -1 && position < length) {
            var current = head
            var previous
            var index = 0

            // 移除第一项
            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previous = current
                    current = current.next
                }
                // 将previous 与 current 的下一项链接起来，跳过current，从而移除它
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    /**
     * 从列表中移除一项
     * @param element
     */
    this.remove = function(element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    /**
     * 返回元素在列表中的索引，如果列表中没有该元素则返回-1
     * @param element
     */
    this.indexOf = function(element) {
        var current = head
        var index = -1

        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    /**
     * 如果链表中不包含任何元素，返回true，如果链表长度大于0，则返回false
     */
    this.isEmpty = function() {
        return length === 0
    }

    /**
     * 返回链表中包含元素的个数，与数组的length属性类似
     */
    this.size = function() {
        return length
    }

    /**
     * 由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的toString方法，让其只输出元素的值
     * toString方法会把LinkedList对象转换成一个字符串
     */
    this.toString = function() {
        var current = head
        var string = ''

        while (current) {
            string += current.element
            current = current.next
        }
        return string
    }

    this.print = function() {
        var current = head
        var index = 0
        while (current !== null) {
            index++
            var printString = `${index} current.element = ${current.element}`
            console.log(printString)
            current = current.next
        }
    }

    this.getHead = function() {
        return head
    }
}

var list = new LinkedList()
list.append(15)
list.append(18)
list.append(21)
list.append(24)
list.append(27)
list.print()
