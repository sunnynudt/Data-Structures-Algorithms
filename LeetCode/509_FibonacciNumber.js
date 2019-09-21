/**
 * 使用二维矩阵计算，矩阵快速幂
 * 时间复杂度O(logn)
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N <= 1) return N

  const multi = (a, b) => {
    let tmp = []

    for (let i = 0; i < 2; i++) {
      tmp[i] = new Array(2)
      for (let j = 0; j < 2; j++) {
        tmp[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
      }
    }

    return tmp
  }

  const power = N => {
    const base = [[1, 1], [1, 0]]
    let matrix

    if (N === 1) {
      matrix = base
    } else if (N % 2 === 0) {
      matrix = power(N / 2)
      matrix = multi(matrix, matrix)
    } else if (N % 2 === 1) {
      matrix = power((N - 1) / 2)
      matrix = multi(matrix, matrix)
      matrix = multi(matrix, base)
    }

    return matrix
  }

  const ans = power(N)

  return ans[1][0]
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
