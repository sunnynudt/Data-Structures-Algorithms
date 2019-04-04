### 归并排序(Merge Sort)

核心思想：先将数组从中间分成前后两部分，然后对前后两部分分别排序，再将排序好的两部分合并在一起。

归并排序使用的是分治思想，顾名思义，就是将一个大问题分解成小问题来解决。分治算法一般都是用递归来实现的。**分治是一种解决问题的处理思想，递归是一种编程技巧**，两者并不冲突。

##### 1. 归并排序算法步骤：

已经原数组 A[p...r]，排序后的 2 个子数组分别为 A[p...q]和 A[q+1...r]。

1. 申请临时数组 tmp，大小与 A[p...r]相同。
2. 设定 2 个游标 i 和 j，A[p...q]和 A[q+1...r]的第 1 个元素。
3. 比较 A[i]和 A[j]，选择较小的元素放入数组 tmp，其对应的游标移到下一位。
4. 重复第 3 步，直到某个游标到达数组尾部，对应的数组的元素已全部存入数组 tmp。
5. 将另一个数组中的剩下的所有元素依次加入到数组 tmp 中，此时临时数组 tmp 中存储的就是两个子数组合并后的结果。
6. 将临时数组 tmp 中的数据拷贝到原数组 A[p...r]中。

```js
const merge = (left = [], right = []) => {
  let tmp = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      tmp.push(left.shift())
    } else {
      tmp.push(right.shift())
    }
  }
  while (left.length > 0) {
    tmp.push(left.shift())
  }
  while (right.length > 0) {
    tmp.push(right.shift())
  }
  return tmp
}

const mergeSort = (arr = []) => {
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  const middle = Math.floor(len / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
```

##### 2. 性能分析

1. 归并排序是稳定的排序算法。
2. 最好、最坏、平均情况时间复杂度都是 O(nlogn)。
3. 空间复杂度是 O(n)。
