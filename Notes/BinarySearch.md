### 二分查找

核心思想：二分查找（折半查找法）针对的是一个有序的数据集合，查找思想有点类似于分治思想。每次都通过与区间的中间元素对比，将待查找的区间缩小为之前的一半，直到找到要查找的元素，或者区间被缩小为 0。

时间复杂度：O(logn)。

#### 递归与非递归实现

最简单的案例：有序数组中不存在重复数据，利用二分查找值等于给定的数据。

```js
// 非递归实现
const binarySearch = (arr, value) => {
  const len = arr.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    // 循环退出条件是 <=
    let mid = Math.floor((low + high) / 2)
    if (a[mid] === value) {
      return mid
    } else if (a[mid] < value) {
      low = mid + 1 // 注意：是mid + 1，而不是 = mid，否则容易发生死循环。
    } else {
      high = mid - 1 // 注意：同上。
    }
  }
  return -1
}
```

```js
// 递归实现

class BinarySearch {
  bsearch(arr, n, value) {
    return this.bsearchInternally(arr, 0, n - 1, value)
  }

  bsearchInternally(arr, low, high, value) {
    if (low > high) {
      return -1
    }
    let mid = low + ((high - low) >> 1)
    if (a[mid] === value) {
      return mid
    } else if (a[mid] < value) {
      return this.bsearchInternally(arr, mid + 1, high, value)
    } else {
      return this.bsearchInternally(arr, low, mid - 1, value)
    }
  }
}
```

#### 二分查找应用场景的局限性

1. 二分查找依赖的是顺序表结构，数组。

主要原因是二分查找算法需要按照下标随机访问元素。比如，数组按照下标随机访问数据的时间复杂度是 O(1)，而链表随机访问的时间复杂度是 O(n)。所以，如果数据使用链表存储，二分查找的时间复杂度就会很高。

2. 二分查找针对的是有序数据。

如果数据没有序，则需要先排序。

所以，二分查找只能用在插入、删除操作不频繁，一次排序多次查找的场景中。针对动态变化的场景，二分查找则不再适用。

3. 数据量太小，不适合二分查找。

如果数据之间的比较操作非常耗时，不管数据量大小，都推荐使用二分查找。比如数组中存储的都是长度超过 300 的字符串，这么长的字符串之间的比较大小，就非常耗时，所以需要尽可能的减少比较操作。

4. 数据量太大，不适合二分查找。

二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求**内存空间连续**，对内存的要求比较苛刻。

#### 4 种常见的二分查找变形问题

前提条件：数据已从小到大排序。如果从大到小排序，解决思路是一致的。

##### 1. 查找第一个值等于给定值的元素

```js
const bSearch = (arr, len, value) => {
  let low = 0
  let high = n - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      // 如果mid == 0，则是数组的第一个元素，则一定是第一个值等于给定值的元素。
      // 如果mid != 0，但a[mid]的前一个元素a[mid - 1] != value，那说明a[mid]就是要找的第一个值等于给定值的元素。
      // 如果a[mid]的前一个元素a[mid-1]也等于value，那说明此时a[mid]肯定不是要找的第一个值等于给定值的元素，所以继续更新 high = mid - 1，因为要找的元素肯定出现在[low, mid - 1]之间。
      if (mid == 0 || a[mid - 1] != value) {
        return mid
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}
```

##### 2. 查找最后一个值等于给定值的元素

```js
const bs = (arr, len, value) => {
  let low = 0
  let high = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (a[mid] > value) {
      high = mid + 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      if (mid == len - 1 || a[mid + 1] != value) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}
```

##### 3. 查找第一个大于等于给定值的元素

```js
const bs = (arr, len, value) => {
  let low = 0
  let hgih = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (a[mid] >= value) {
      if (mid == 0 || a[mid - 1] < value) {
        return mid
      } else {
        high = mid - 1
      }
    } else {
      low = mid + 1
    }
  }
  return -1
}
```

##### 4. 查找最后一个小于等于给定值的元素

```js
const bs = (arr, len, value) => {
  let low = 0
  let hgih = len - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (a[mid] > value) {
      high = mid - 1
    } else {
      if (mid == len - 1 || a[mid + 1] > value) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}
```
