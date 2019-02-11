// 动态规划：背包之金矿模型

class GetMaxGold {
    constructor({ peopleTotal, n, peopleNeed, gold }) {
        this.peopleTotal = peopleTotal // 可以拥有挖金子的人数
        this.n = n // 金矿数
        this.peopleNeed = peopleNeed // 每座金矿需要的人数
        this.gold = gold // 每座金矿能够挖出来的金子数
        this.maxGold = [] // maxGold[i][j]保存了i个人挖前j个金矿能够得到的最大金子数，等于-1时表示未知
    }

    // js的二维数组需要使用new Array()(https://juejin.im/post/5acebc33f265da2385333c04)
    init() {
        for (let i = 0; i < this.peopleTotal; i++) {
            this.maxGold[i] = new Array()
            for (let j = 0; j < this.n; j++) {
                this.maxGold[i][j] = -1 // 等于-1时表示未知[对应动态规划中的“做备忘录”]
            }
        }
    }

    // 获得在仅有people个人和前mineNum个金矿时能够得到的最大金子数，注意“前多少个”也是从0开始编号的
    getMaxGold(people, mineNum) {
        let retMaxGold = 0 // 声明返回的最大金子数
        let maxGold = this.maxGold

        // 如果这个问题曾经计算过（对应动态规划中的“做备忘录”）
        if (maxGold[people][mineNum] != -1) {
            // 获得保存起来的值
            retMaxGold = maxGold[people][mineNum]
        } else if (mineNum == 0) {
            // 如果仅有一个金矿时（对应动态规划中的‘边界’）
            // 当给出的人数足够开采这个金矿
            if (people >= this.peopleNeed[mineNum]) {
                // 得到的最大值就是这个金矿的金子数
                retMaxGold = this.gold[mineNum]
            } else {
                // 否则这唯一的一个金矿也不能开采
                // 得到的最大值为0个金子
                retMaxGold = 0
            }
        } else if (people >= this.peopleNeed[mineNum]) {
            // 如果给出的人够开采这座金矿（对应动态规划中的“最优子结构”）
            // 考虑开采与不开采的两种情况，取最大值
            retMaxGold = Math.max(
                this.getMaxGold(
                    people - this.peopleNeed[mineNum],
                    mineNum - 1
                ) + this.gold[mineNum],
                this.getMaxGold(people, mineNum - 1)
            )
        } else {
            // 否则给出的人不够开采这座金矿（对应动态规划中的“最优子结构”）
            // 仅考虑不开采的情况
            retMaxGold = this.getMaxGold(people, mineNum - 1)
        }

        // 做备忘录
        this.maxGold[people][mineNum] = retMaxGold
        return retMaxGold
    }
}

// test
const peopleTotal = 100
const n = 5
const peopleNeed = [77, 22, 29, 50, 99]
const gold = [92, 22, 87, 46, 90]

const getMaxGold = new GetMaxGold({ peopleTotal, n, peopleNeed, gold })
getMaxGold.init()
// 给定peopleTotal个人和n个金矿能够获得的最大金子数，编号从0开始，最后一个金矿编号为n-1
const retMaxGold = getMaxGold.getMaxGold(peopleTotal - 1, n - 1)
console.log('retMaxGold = ', retMaxGold) // 133
