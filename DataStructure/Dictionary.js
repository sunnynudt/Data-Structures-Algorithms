function Dictionary() {
    let items = {}

    // 直接value设置为items对象的key属性的值，可以用来向字典添加一个新的值，也可以用来更新一个已有的值；
    this.set = function (key, value) {
        items[key] = value
    }

    // 通过使用键值来从字典中移除键值对应的数据值
    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true
        }

        return false
    }

    // 如果某个键值存在于这个字典中，则返回true，否则返回false
    // in 可以判断对象的自有属性和继承来的属性是否存在；对应的hasOwnProperty可以判断对象是否含特定的自身的属性；
    this.has = function (key) {
        return key in items
    }

    // 通过键值查找特定的数值并返回
    // 注意：undefined值和null值不一样的
    this.get = function (key) {
        return this.has(key) ? items[key] : undefined
    }

    // 返回字典所包含元素的数量。与数组的length属性类似。
    this.size = function () {
        return Object.keys(items).length
    }

    // 将这个字典中的所有元素全部删除
    this.clear = function () {
        items = {}
    }

    // 将字典所包含的所有键名以数组形式返回
    this.keys = function () {
        return Object.keys(items)
    }

    this.getItems = function () {
        return items
    }

    // 将字典所包含的所有数值以数组形式返回。
    this.values =  function () {
        let values = {}

        for (let k in items) {
            if (this.has(k)) {
                values.push(items[k])
            }
        }
        
        return values
    }
}