/**
 * 时间复杂度O(n)
 * 代码可扩展性不好，如果让求第10大元素呢？
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = null
  let max2 = null
  let max3 = null

  nums.forEach(item => {
    if (item === max1 || item === max2 || item === max3) return

    if (max1 === null || item > max1) {
      max3 = max2
      max2 = max1
      max1 = item
    } else if (max2 === null || item > max2) {
      max3 = max2
      max2 = item
    } else if (max3 === null || item > max3) {
      max3 = item
    }
  })

  return max3 === null ? max1 : max3
}

/**
 * 利用Set去重，快排
 * 时间复杂度O(nlogn)
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let newList = [...new Set(nums)]
  newList.sort((a, b) => b - a)

  if (newList.length < 3) return newList[0]

  return newList[2]
}
