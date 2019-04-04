### 快速排序(Quick Sort)

快排是处理大数据最快的排序算法之一。快排在平均情况下，排序 n 个数据要 O(nlogn)次比较，在最坏情况下则需要 O(n^2)次比较，但是这种情况比较少见。实际中，快排通常要比其他 O(nlogn)算法要快，因为它的内部循环(inner loop)可以在大部分的架构上很有效率的被实现出来。

> 快排的最坏运行情况是 O(n^2)，比如顺序数组的排序。但是平均时间复杂度时 O(nlogn)，且 O(nlogn)记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn)的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数组而言，快速排序总是优于归并排序。——《算法艺术与信息学竞赛》

快排也是利用分治思想，看起来像归并排序，但是思路完全不同。

核心思想：如果要排序数组中下标从 p 到 r 之间的一组数据，可选择 p 到 r 之间的任意一个数据作为 pivot(区分点)。遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间。经过这一步骤后，数组 p 到 r 之间的数据就被分成了 3 个部分，前面 p 到 q-1 之间都是小于 pivot 的，中间是 pivot，后面的 q+1 到 r 之间都是大于 pivot 的。根据分治、递归的处理思想，可以用递归排序下标从 p 到 q-1 之间的数据和下标从 q+1 到 r 之间的数据，直到区间缩小为 1，就说明所有数据都有序了。

快速排序的核心问题是基准元素的选择以及元素的移动。

##### 元素的移动

1. 挖坑法(递归)

```js
// 通过递归的方式，实现了分而治之的思想。
function quickSort(arr = [], startIndex = 0, endIndex = 0) {
  // 递归结束条件
  if (startIndex >= endIndex) {
    return arr
  }
  // 得到基准元素位置
  let pivotIndex = partition(arr, startIndex, endIndex)
  // 分治法递归数组的两部分
  quickSort(arr, startIndex, pivotIndex - 1)
  quickSort(arr, pivotIndex + 1, endIndex)
  return arr
}

// 实现元素的移动，让数组中的元素依据自身大小，分别移动到基准元素的左右两边。
function partition(arr = [], startIndex = 0, endIndex = 0) {
  // 取第一个位置的元素做基准
  let pivot = arr[startIndex]
  let left = startIndex
  let right = endIndex
  // 坑的位置，初始等于pivot的位置
  let index = startIndex
  // 大循环在左右指针重合或交错时候结束
  while (right >= left) {
    // right指针从右向左进行比较
    while (right >= left) {
      if (arr[right] < pivot) {
        arr[left] = arr[right]
        index = right
        left++
        break
      }
      right--
    }
    // left指针从左向右进行比较
    while (right >= left) {
      if (arr[left] > pivot) {
        arr[right] = arr[left]
        index = left
        right--
        break
      }
      left++
    }
  }
  arr[index] = pivot
  return index
}
```

2. 指针交换法(递归)

##### 2. 快速排序与归并排序的区别

1. 归并排序的处理是**由下到上**，先处理子问题，然后再合并。

2. 快排正好相反，处理过程是**由下到上**，先分区，然后再处理子问题。

3. 归并排序虽然是稳定的、时间复杂度为 O(nlogn)，但是它是非原地排序算法，主要是因为合并函数无法在原地执行。

4. 快排通过设计原地分区函数，可以实现原地排序，解决了归并排序占用太多内存的问题。

##### 3. 性能分析

1. 快排是原地排序算法，空间复杂度是 O(1)。
2. 快排平均时间复杂度是 O(nlogn)，最坏时间复杂度是 O(n^2)。
3. 快排是不稳定的排序算法。
