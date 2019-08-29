class ValidParentheses {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = []
    const charMap = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    if (s.length === 0) {
      return true
    }

    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i)

      if (['(', '[', '{'].includes(char)) {
        stack.push(char)
      }

      if ([')', ']', '}'].includes(char)) {
        if (stack.length === 0) {
          return false
        }

        const peek = stack.pop()

        if (charMap[char] !== peek) {
          return false
        }
      }
    }

    if (stack.length > 0) {
      return false
    }

    return true
  }
}
