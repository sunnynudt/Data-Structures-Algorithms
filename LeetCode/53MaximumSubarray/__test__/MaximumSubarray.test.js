const MaxSubArray = require('../MaximumSubarray')

test('test: ', () => {
  const list = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  const MaxSubArray1 = new MaxSubArray([...list])
  const MaxSubArray2 = new MaxSubArray([...list])
  expect(MaxSubArray1.MaxSubArray1()).toBe(6)
  expect(MaxSubArray2.MaxSubArray2()).toBe(6)
})
