class HouseRobber {
  constructor(list) {
    this.list = list
  }

  getMaxAmount() {
    if (!this.list || this.list.length == 0) {
      return 0
    }
    if (this.list.length == 1) {
      return this.list[0]
    }
    if (this.list.length == 2) {
      return Math.max(this.list[0], this.list[1])
    }
    let dp = []
    dp[0] = this.list[0]
    dp[1] = Math.max(this.list[0], this.list[1])
    for (let i = 2; i < this.list.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + this.list[i])
    }
    return Math.max(...dp)
  }
}

module.exports = HouseRobber
