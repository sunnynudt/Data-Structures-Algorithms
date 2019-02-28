const MaxSubArray = require('../MaximumSubarray')

test('test: ', () => {
  const maxSubArray = new MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  expect(maxSubArray.getMaxSubArray()).toBe(6)
})
