/**
 * 每次冒泡操作都会对相邻的两个元素进行比较。
 * 一次冒泡会至少让一个元素移动到它应该在的位置，重复 n 次，就完成了 n 个数据的排序工作。
 *
 * @param {Array} arr
 * @returns {Array} 递增的已排序数组
 */
function bubbleSort(arr) {
  let tmp = 0

  if (arr.length <= 1) {
    return arr
  }

  for (let i = 0; i < arr.length; i++) {
    let isSorted = true

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
        // 有元素交换，所以不是有序
        isSorted = false
      }
    }

    if (isSorted) {
      break
    }
  }

  return arr
}
