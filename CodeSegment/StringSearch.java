/**
 * 字符串查找算法 算法4代码段
 */
public class StringSearch {
  /**
   * 暴力子字符串查找算法 在txt中查找pat第一次出现的位置
   *
   * @param pat: 模式字符串
   * @param txt: 文本字符串
   * @return 模式字符串在文本中不存在，返回N的值
   */
  public static int search(String pat, String txt) {
    int M = pat.length();
    int N = txt.length();
    for (int i = 0; i <= N - M; i++) {
      int j;
      for (j = 0; j < M; j++) {
        if (txt.charAt(i + j) != pat.charAt(j)) {
          break;
        }
      }
      if (j == M) {
        return i; // 找到匹配
      }
    }
    return N; // 未找到匹配
  }
}