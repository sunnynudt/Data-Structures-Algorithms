/**
 * 1. 快速排序是原地排序算法，空间复杂度是 O(1)。
 * 2. 平均时间复杂度是 O(nlogn)，最坏时间复杂度是 O(n^2)。
 * 3. 是不稳定的排序算法。
 *
 * @param {Array} arr
 * @param {Number} startIndex
 * @param {Number} endIndex
 * @returns {Array} 递增的数组
 */
function quickSort(arr, startIndex, endIndex) {
  // 递归结束条件，startIndex >= endIndex
  if (startIndex >= endIndex) {
    return arr
  }

  // 得到基准元素位置
  let pivotIndex = partition(arr, startIndex, endIndex)

  // 根据基准元素，分成两部分递归排序
  quickSort(arr, startIndex, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, endIndex)

  return arr
}

function partition(arr, startIndex, endIndex) {
  // 取第一个位置的元素作为基准元素
  let pivot = arr[startIndex]
  let left = startIndex
  let right = endIndex

  while (left !== right) {
    // 控制right指针比较且左移
    while (left < right && arr[right] > pivot) {
      right--
    }

    // 控制left指针比较且右移
    while (left < right && arr[left] <= pivot) {
      left++
    }

    // 交换left和right指向的元素
    if (left < right) {
      let tmp = arr[left]
      arr[left] = arr[right]
      arr[right] = tmp
    }
  }

  // pivot和指针重合点交换
  let tmp = arr[left]
  arr[left] = arr[startIndex]
  arr[startIndex] = tmp

  return left
}

/**
 * 单独开辟2个存储空间`left`和`rihgt`来存储每次递归比pivot小和大的数组。
 * 优点：简单；缺点：浪费大量存储空间。
 * **不推荐**
 */
function quickSort2(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[0]
  const left = []
  const right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}
