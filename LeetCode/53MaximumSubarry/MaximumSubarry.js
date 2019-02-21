// 方法一
// leetcode题解：https://leetcode.com/problems/maximum-subarray/discuss/139218/Javascript-very-clear-and-short-DP-solution
var maxSubArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
  }
  return Math.max(...nums)
}
