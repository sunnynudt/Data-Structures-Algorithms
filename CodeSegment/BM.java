public class BM {
  private static final int SIZE = 256; // 全局变量或成员变量

  /**
   * “坏字符规则”本身不难理解，当遇到坏字符时，要计算往后移动的位数si-xi，其中xi的计算是重点，如何求xi呢？即如何查找坏字符在模式串中出现的位置呢？
   * 如果拿坏字符在模式串中顺序遍历查找，比较低效，会影响这个算法的性能。
   * 可以将模式串的每个字符及其下标都存到散列表中。就可以快速找到坏字符在模式串的位置下标了。
   *
   * @param b
   * @param m
   * @param bc
   */
  private void generateBC(char[] b, int m, int[] bc) {
    for (int i = 0; i < SIZE; ++i) {
      bc[i] = -1; // 初始化bc
    }
    for (int i = 0; i < m; ++i) {
      int ascii = (int) b[i]; // 计算b[i]的ASCII值
      bc[ascii] = i;
    }
  }
}