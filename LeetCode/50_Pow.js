/**
 * 快速幂，递归方法
 * 时间复杂度O(logn)
 * 空间复杂度O(logn)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1

  if (n < 0) {
    return 1 / myPow(x, -n)
  }

  return n % 2 !== 0 ? x * myPow(x, n - 1) : myPow(x * x, n / 2)
}

/**
 * 快速幂，循环方法
 * 时间复杂度O(logn)
 * 空间复杂度O(1)
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) return 1

  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let ans = 1
  let cur = x

  for (let i = n; i > 0; i = Math.floor(i / 2)) {
    // JS中除法会有小数部分，要使用Math.floor(i / 2)，防止栈溢出
    if (i % 2 === 1) {
      ans = ans * cur
    }

    cur = cur * cur
  }

  return ans
}
