/**
 * 使用二维矩阵计算
 * 时间复杂度O(logn)
 * @param {number} N
 * @return {number}
 */
fib = N => {
  // TODO:
}

/**
 * 正推法
 * 时间复杂度O(n)
 * @param {number} N
 * @return {number}
 */
fib = N => {
  if (N === 0) return 0
  if (N === 1) return 1

  let arr = [0, 1]

  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }

  return arr[N]
}

/**
 * 递归法，不推荐
 * 时间复杂度O(2^n)
 * @param {number} N
 * @return {number}
 */
fib = N => {
  if (N === 0) return 0
  if (N === 1) return 1

  return fib(N - 1) + fib(N - 2)
}
