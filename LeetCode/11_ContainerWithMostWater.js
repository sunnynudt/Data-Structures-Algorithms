class ContainerWithMostWater {
  /**
   * @param {number[]} height
   * @return {number}
   */
  maxArea(height) {
    if (!Array.isArray(height) || height.length < 2) {
      return 0
    }

    let max = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]))

      if (height[i] < height[j]) {
        i++
      } else {
        j--
      }
    }

    return max
  }
}
