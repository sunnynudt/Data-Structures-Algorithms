class MaxSubArray {
  constructor(list) {
    this.list = list
  }

  getMaxSubArray() {
    let dp = []
    dp[0] = this.list[0]
    for (let i = 1; i < this.list.length; i++) {
      dp[i] = Math.max(this.list[i], this.list[i] + dp[i - 1])
    }
    return Math.max(...dp)
  }
}

module.exports = MaxSubArray
