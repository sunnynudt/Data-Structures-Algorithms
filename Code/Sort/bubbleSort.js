/**
 * 每次冒泡操作都会对相邻的两个元素进行比较。
 * 一次冒泡会至少让一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。
 *
 * 优化：
 * 关键在于对数组有序区的界定。
 * 可以在每一轮排序的最后，记录下最后一次元素交换的位置，此位置就是无序数组的边界，再往后就是有序区。
 * 有序区就不需要再比较了。
 *
 * @param {Array} arr
 * @returns {Array} 递增的已排序数组
 */
function bubbleSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let tmp = 0
  // 记录最后一次交换的位置
  let lastExchangeIndex = 0
  // 无序数组的边界，每次比较只需要比到这里为止
  let sortBorder = arr.length - 1

  for (let i = 0; i < arr.length; i++) {
    // 有序标记，每一轮的初始值是true
    let isSorted = true

    for (let j = 0; j < sortBorder; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        // 有元素交换，所以不是有序
        isSorted = false
        // 把无序数列的边界更新为最后一次交换元素的位置
        lastExchangeIndex = j
      }
    }

    sortBorder = lastExchangeIndex

    if (isSorted) {
      break
    }
  }

  return arr
}
