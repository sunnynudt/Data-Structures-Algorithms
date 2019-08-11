class NondecreasingArray {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  checkPossibility(nums) {
    // the number of changes
    let cnt = 0

    for (let i = 1; i < nums.length && cnt <= 1; i++) {
      if (nums[i - 1] > nums[i]) {
        cnt++

        if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
          // modify nums[i-1] of a priority
          nums[i - 1] = nums[i]
        } else {
          // have to modify nums[i]
          nums[i] = nums[i - 1]
        }
      }
    }

    return cnt <= 1
  }
}
