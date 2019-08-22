class ValidAnagram {
  /**
   * 利用哈希表，时间复杂度为O(n)
   *
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) {
      return false
    }

    let list = {}

    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i)

      if (list[char] >= 1) {
        list[char] = list[char] + 1
      } else {
        list[char] = 1
      }
    }

    for (let i = 0; i < t.length; i++) {
      const char = t.charAt(i)

      if (list[char] === undefined) {
        return false
      }

      if (list[char] >= 0) {
        list[char] = list[char] - 1
      }

      if (list[char] === -1) {
        return false
      }
    }

    return true
  }
}
