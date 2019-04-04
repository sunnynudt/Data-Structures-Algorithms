### 选择排序(Selection Sort)

实现思想：类似于插入排序，将数组也区分为已排序区间和未排序区间。但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。

选择排序空间复杂度为 O(1)，是一种原地排序算法。其最好、最坏、平均情况时间复杂度都为 O(n^2)。

选择排序不是稳定的排序算法，因为其每次都要找剩余未排序元素中的最小值，并和前面的元素交换位置，破坏了稳定性。

```js
const selectionSort = arr => {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  // 总共需要经过 len - 1次比较
  for (let i = 0; i < len - 1; i++) {
    let min = i
    // 每轮需要比较的次数 len - i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        // 记录目前能找到的最小值元素的小标
        min = j
      }
    }
    // 将找到的最小值和i位置所在的值进行交换
    if (i !== min) {
      let tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
  }
  return arr
}
```
