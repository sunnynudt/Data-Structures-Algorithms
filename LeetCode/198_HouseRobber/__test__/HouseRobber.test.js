const HouseRobber = require('../HouseRobber')

test('house robber test1: ', () => {
  const list = [2, 7, 9, 3, 1]
  const houseRobber = new HouseRobber(list)
  expect(houseRobber.getMaxAmount(list.length)).toBe(12)
})

test('house robber test2:', () => {
  const list = [3, 1, 2, 5]
  const houseRobber = new HouseRobber(list)
  expect(houseRobber.getMaxAmount(list.length)).toBe(8)
})
