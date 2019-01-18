/**
 * 集合是由一组无序且唯一（即不能重复）的项组成。
 * JS中对象不允许一个键指向两个不同的属性。
 */
function Set() {
    var items = {}

    // 向集合添加一个新的项
    // 添加一个值的时候，把它同时作为键和值保存，因为这样有利于查找这个值；
    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value
            return true
        }

        return false
    }

    // 从集合移除一个值
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value]
            return true
        }

        return false
    }

    // 如果值在集合中，返回true，否则返回false
    // 所有继承了Object的对象都会继承到hasOwnProperty方法；
    // hasOwnProperty()可以用来检测一个对象是否含有特定的自身属性；和in运算符不同，该方法会忽略掉那些从原型链上继承到的属性；
    this.has = function(value) {
        return items.hasOwnProperty(value)
    }

    // 移除集合中的所有项
    this.clear = function() {
        items = {}
    }

    // 返回集合所包含元素的数量，与数组的length属性类似
    this.size = function() {
        return Object.keys(items).length
    }

    // 返回一个包含集合中所有值得数组
    this.values = function() {
        return Object.keys(items)
    }

    // 并集
    this.union = function(otherSet) {
        var unionSet = new Set()
        var values = this.values()

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }

    // 交集
    this.intersection = function(otherSet) {
        var intersectionSet = new Set()
        var values = this.values()

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }

        return intersectionSet
    }

    // 差集
    this.difference = function(otherSet) {
        var differenceSet = new Set()
        var values = this.values()

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }

        return differenceSet
    }

    // 子集
    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        }

        var values = this.values()

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false
            }
        }

        return true
    }
}
