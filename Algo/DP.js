// 动态规划（Dynamic Programming，DP）是一种将复杂问题分解成更小的子问题来解决的优化技术。
// 动态规划和分而治之不用，分而治之是把问题分解成【相互独立】的子问题，然后组合它们的答案。
// 而动态规划则是将问题分解成【相互依赖】的子问题。

// 用动态规划解决问题时，要遵循三个重要步骤：
// 1. 定义子问题
// 2. 实现要反复执行而解决子问题的部分（可参考递归的步骤）
// 3. 识别并求解出边界条件

// 能用动态规划解决的著名问题：背包问题，最长公共子序列，矩阵链相乘，图的全源最短路径

// 最少硬币找零问题，其解决方案是找到n所需的最小硬币数
// 首先得找到对每个 x < n的解，然后将解建立在更小的值得解的基础上

function MinCoinChange(coins) { // coins: 面额，比如美国硬币[1,5,10,25]
    var coins = coins
    var cache = {}

    this.makeChange = function(amount) { // 返回数组，包含用来找零的各个面额的硬币数量（最少硬币数）
        var me = this
        if (!amount) {
            return []
        }

        if (cache[amount]) {
            return cache[amount]
        }

        var min = []
        var newMin
        var newAmount

        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i]
            newAmount = amount - coin
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount)
            }

            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin)
                console.log('new Min ' + min + ' for ' + amount)
            }
        }

        return (cache[amount] = min)
    }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log('minCoinChange = ', minCoinChange.makeChange(36))
