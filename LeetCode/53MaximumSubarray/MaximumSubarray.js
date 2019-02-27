class MaxSubArray {
  constructor(list) {
    this.list = list
  }

  // https://leetcode.com/problems/maximum-subarray/discuss/139218/Javascript-very-clear-and-short-DP-solution
  MaxSubArray1() {
    for (let i = 1; i < this.list.length; i++) {
      this.list[i] = Math.max(this.list[i], this.list[i] + this.list[i - 1])
    }
    // console.log(this.list) // [ -2, 1, -2, 4, 3, 5, 6, 1, 5 ]
    return Math.max(...this.list)
  }

  // https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts
  MaxSubArray2() {
    const n = this.list.length
    let dp = []
    dp[0] = this.list[0]
    let max = dp[0]
    for (let i = 1; i < n; i++) {
      dp[i] = this.list[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
      max = Math.max(max, dp[i])
    }
    // console.log(dp) // [ -2, 1, -2, 4, 3, 5, 6, 1, 5 ]
    return max
  }
}

module.exports = MaxSubArray
