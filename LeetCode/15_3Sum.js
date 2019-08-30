/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return []
  }

  nums.sort((a, b) => a - b)

  let res = []

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break

    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      if (nums[right] < 0) break

      let sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])

        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}
