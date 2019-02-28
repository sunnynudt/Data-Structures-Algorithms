class HouseRobber {
  constructor(list) {
    this.list = list
  }

  getMaxAmount() {
    let amount1 = 0
    let amount2 = 0
    for (let i = 0; i < this.list.length; i = i + 2) {
      amount1 = amount1 + this.list[i]
    }
    for (let i = 1; i < this.list.length; i = i + 2) {
      amount2 = amount2 + this.list[i]
    }
    return Math.max(amount1, amount2)
  }
}

module.exports = HouseRobber
