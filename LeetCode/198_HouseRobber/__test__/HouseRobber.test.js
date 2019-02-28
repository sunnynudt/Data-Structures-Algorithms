const HouseRobber = require('../HouseRobber')

test('test: ', () => {
  const houseRobber = new HouseRobber([2, 7, 9, 3, 1])
  expect(houseRobber.getMaxAmount()).toBe(12)
})
