class BestTimetoBuyandSellStockII {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maxProfit = 0

    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i + 1] > prices[i]) {
        maxProfit = maxProfit + prices[i + 1] - prices[i]
      }
    }

    return maxProfit
  }

  maxProfit2(prices) {
    return prices.reduce((accumulator, curValue, index) => {
      if (index >= 1) {
        if (curValue > prices[index - 1]) {
          return accumulator + curValue - prices[index - 1]
        } else {
          return accumulator
        }
      } else {
        return 0
      }
    }, 0)
  }
}
