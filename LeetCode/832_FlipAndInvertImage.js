class FlipAndInvertImage {
  /**
   * @param {number[][]} A
   * @return {number[][]}
   */
  flipAndInvertImage(A) {
    let res = []

    for (let i = 0; i < A.length; i++) {
      let item = A[i]
      let demo = []

      for (let j = 0; j < item.length; j++) {
        let endIndex = item.length - j - 1
        demo[j] = 1 - item[endIndex]
      }

      res.push(demo)
    }

    return res
  }

  flipAndInvertImage2(A) {
    let rowLength = A[0].length
    let isRowLengthOdd = rowLength % 2 === 1

    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < rowLength / 2; j++) {
        let temp1 = A[i][j]
        let temp2 = A[i][rowLength - j - 1]

        if (temp1 === temp2) {
          let reverseValue = 1 - A[i][j]
          A[i][j] = reverseValue
          A[i][rowLength - j - 1] = reverseValue
        }
      }

      if (isRowLengthOdd) {
        A[i][rowLength / 2] = 1 - A[i][rowLength / 2]
      }
    }

    return A
  }
}
