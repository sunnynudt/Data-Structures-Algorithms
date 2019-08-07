class TwoSum {
  twoSum_1(nums, target) {
    if (!Array.isArray(nums) || nums.length < 2) {
      return []
    }

    const myMap = new Map()

    for (i = 0; i < nums.length; i++) {
      const oIndex = myMap.get(target - nums[i])

      if (oIndex >= 0) {
        return [oIndex, i]
      }

      myMap.set(nums[i], i)
    }

    return []
  }
}
