function solution(number, k) {
  let stack = []
  for (let i = 0; i < number.length; i++) {
    stack.push(number[i])
    while (k > 0 && stack[stack.length - 1] < number[i + 1]) {
      k--
      stack.pop()
    }
  }
  return k === 0 ? stack.join('') : stack.slice(0, stack.length - k).join('')
}
