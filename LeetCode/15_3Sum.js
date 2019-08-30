/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  if (!Array.isArray(nums) || nums.length < 3) {
    return []
  }

  const res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue
    }

    let left = i
    let right = nums.length - 1

    while (left < right) {
      if (left === i) {
        left++
      } else if (right === i) {
        right--
      } else if (nums[left] + nums[right] + nums[i] === 0) {
        res.push([nums[i], nums[left], nums[right]])

        while (nums[left] === nums[left + 1]) {
          left++
        }

        left++

        while (nums[right] === nums[right - 1]) {
          right--
        }

        right--
        continue
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}
