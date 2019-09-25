### 概述

1. 排序算法

   *内部排序*是数据记录在内存中进行排序。*外部排序*是因为排序的数据很大，一次不能容纳全部的排序记录，在排序过程中需要访问外存。

|          | 平均时间复杂度 | 最好情况时间复杂度 | 最坏情况时间复杂度 | 空间复杂度 | 是否原地排序 | 是否稳定排序 |
| :------: | :------------: | :----------------: | :----------------: | :--------: | :----------: | :----------: |
| 冒泡排序 |     O(n^2)     |        O(n)        |       O(n^2)       |    O(1)    |      ✅      |      ✅      |
| 插入排序 |     O(n^2)     |        O(n)        |       O(n^2)       |    O(1)    |      ✅      |      ✅      |
| 选择排序 |     O(n^2)     |       O(n^2)       |       O(n^2)       |    O(1)    |      ✅      |      ❌      |
| 快速排序 |    O(nlogn)    |      O(nlogn)      |       O(n^2)       |  O(logn)   |      ✅      |      ❌      |
|  堆排序  |    O(nlogn)    |      O(nlogn)      |      O(nlogn)      |    O(1)    |      ✅      |      ❌      |
| 归并排序 |    O(nlogn)    |      O(nlogn)      |      O(nlogn)      |    O(n)    |      ❌      |      ✅      |
| 希尔排序 |    O(nlogn)    |     O(nlog^2n)     |     O(nlog^2n)     |    O(1)    |      ✅      |      ❌      |
|  桶排序  |    O(n + k)    |      O(n + k)      |       O(n^2)       |  O(n + k)  |      ❌      |      ✅      |
| 计数排序 |    O(n + k)    |      O(n + k)      |      O(n + k)      |    O(k)    |      ❌      |      ✅      |
| 基数排序 |    O(n × k)    |      O(n × k)      |      O(n × k)      |  O(n + k)  |      ❌      |      ✅      |

2. 线性排序

   时间复杂度时线性的，比如桶排序、计数排序和基数排序的时间复杂度是`O(n)`。之所以能做到线性的时间复杂度，主要原因是这三个算法是非基于比较的排序的算法，都不涉及元素之间的比较操作。

3. 如何分析一个排序算法

   - 最好情况、最坏情况、平均情况时间复杂度；
   - 时间复杂度的系数、常数和低阶；
   - 比较次数和交换（或移动）次数。

4. 排序算法的内存消耗

   针对排序算法的空间复杂度，引入一个新概念：原地排序(Sorted in place)。**原地排序算法，就是特指空间复杂度是 O(1)的排序算法**。

5. 排序算法的稳定性

   针对排序算法，有一个重要的度量指标，稳定性，就是说，如果待排序的序列中存在值相等的元素，经过排序后，相等元素之间原有的先后顺序不变。

_Tips: 思考题：插入排序和冒泡排序的时间复杂度都是 O(n^2)，在实际的软件开发中，为什么大家更倾向于使用插入排序算法而不是冒泡排序算法呢？_

### 排序算法

- [归并排序](/Notes/Sort/MergeSort.md)
- [插入排序](/Notes/Sort/InsertionSort.md)
- [选择排序](/Notes/Sort/SelectionSort.md)
- [线性排序：桶排序、计数排序、基数排序](/Notes/Sort/LinearSort.md)

### [快速排序](/Code/Sort/quickSort.js)

快排是处理大数据最快的排序算法之一。快排在平均情况下，排序 n 个数据要 O(nlogn)次比较，在最坏情况下则需要 O(n^2)次比较，但是这种情况比较少见。实际中，快排通常要比其他 O(nlogn)算法要快，因为它的内部循环(inner loop)可以在大部分的架构上很有效率的被实现出来。

> 快排的最坏运行情况是 O(n^2)，比如顺序数组的排序。但是平均时间复杂度时 O(nlogn)，且 O(nlogn)记号中隐含的常数因子很小，比复杂度稳定等于 O(nlogn)的归并排序要小很多。所以，对绝大多数顺序性较弱的随机数组而言，快速排序总是优于归并排序。——《算法艺术与信息学竞赛》

快排也是利用分治思想，看起来像归并排序，但是思路完全不同。

核心思想：如果要排序数组中下标从 p 到 r 之间的一组数据，可选择 p 到 r 之间的任意一个数据作为 pivot(区分点)。遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间。经过这一步骤后，数组 p 到 r 之间的数据就被分成了 3 个部分，前面 p 到 q-1 之间都是小于 pivot 的，中间是 pivot，后面的 q+1 到 r 之间都是大于 pivot 的。根据分治、递归的处理思想，可以用递归排序下标从 p 到 q-1 之间的数据和下标从 q+1 到 r 之间的数据，直到区间缩小为 1，就说明所有数据都有序了。

快速排序的核心问题是基准元素的选择以及元素的移动。

[快速排序 JavaScript](/Code/Sort/quickSort.js)

### [冒泡排序](/Code/Sort/bubbleSort.js)

[冒泡排序 JavaScript](/Code/Sort/bubbleSort.js)

### 参考文献

- [漫画：什么是快速排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195042&idx=1&sn=2b0915cd2298be9f2163cc90a3d464da&chksm=8c99f9f8bbee70eef627d0f5e5b80a604221abb3a1b5617b397fa178582dcb063c9fb6f904b3&scene=21#wechat_redirect)
- [漫画：什么是堆排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195208&idx=1&sn=e3d6559402148458f0a4993b47d8bc6f&chksm=8c99f912bbee7004625a0b204acc8484acbdf4f1b18953e7ff5acbea958ec002d8c8ea072792&scene=21#wechat_redirect)
- [漫画：什么是冒泡排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653194666&idx=1&sn=69ce32870c0b981c40b1e124fbb6bba8&chksm=8c99fb70bbee72668cad223892ad362525d215e7f936458f99dd289eb82981099359310e9e54&scene=21#wechat_redirect)
- [漫画：什么是鸡尾酒排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653194919&idx=2&sn=f473bc9e0da124a303312a11902e2f52&chksm=8c99f87dbbee716b531df3fcf5882998f28794aad5609f225883d6c2dc71ba51b8a5126b32be&scene=21#wechat_redirect)
- [漫画：什么是计数排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195533&idx=1&sn=02918dc51b07837ce1119f00d7900dbc&chksm=8c99ffd7bbee76c1d2e2e9b198259795285ec2c305d3613a5e39622195fd1c32bb6dbe52fa08&scene=21#wechat_redirect)
- [漫画：什么是桶排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653195582&idx=1&sn=1e7ece4e48c20fb994e2cefdcbdce4c5&chksm=8c99ffe4bbee76f23d16ac1e0c7feeb16654ebb75e40d92c911bffa113059f52ce4508281a55&scene=21#wechat_redirect)
- [漫画：什么是选择排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653198991&idx=1&sn=7f98d59898a911e1425baa6cc180c598&chksm=8c99e855bbee61439086680ceefef33c56038c5d552ae64c1d6135abe467b617aa62f4934f36&scene=21#wechat_redirect)
- [漫画：什么是插入排序？](https://mp.weixin.qq.com/s?__biz=MzIxMjE5MTE1Nw==&mid=2653199343&idx=1&sn=a5491fa908e45e6117423d9ba5062611&chksm=8c99e935bbee60232aacb7c2b74961a24e7b86d44bf98357c597ad277a8eb15639c1de7034d9&scene=21#wechat_redirect)
- [十大经典排序算法动画与解析](https://mp.weixin.qq.com/s/vn3KiV-ez79FmbZ36SX9lg)
