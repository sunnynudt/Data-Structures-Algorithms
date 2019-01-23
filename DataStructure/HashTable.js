// HashTable类，也叫HashMap类，是Dictionary类的一种散列表实现方式。
// 散列算法的作用是尽可能的在数据结构中找到一个值。
// 散列函数的作用是给定一个键值，然后返回值在表中的地址。
function HashTable() {
    let table = []

    // 私有方法
    // 电子邮件地址簿，最常见的散列函数 lose lose，方法是简单地将每个键值中的每个字母的ASCII值相加
    const loseloseHashCode = function(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    // 向散列报中增加一个新项或更新散列表
    this.put = function(key, value) {
        let position = loseloseHashCode(key)
        console.log(position + '- ' + key)
        table[position] = value
    }

    // 根据键值从散列中移除值
    this.remove = function(key) {
        table[loseloseHashCode[key]] = undefined
    }

    // 返回根据键值检索到的特定的值
    this.get = function(key) {
        return table[loseloseHashCode(key)]
    }
}
