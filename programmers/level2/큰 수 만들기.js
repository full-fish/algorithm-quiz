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
  //!
  //   while (k > 0) {
  //     let max = number[0]
  //     let index = 0
  //     for (let i = 1; i < k; i++) {
  //       if (i < k && number[i] > max) {
  //         max = number[i]
  //         index = i
  //       }
  //     }
  //     if (index > 0) {
  //       number = number.slice(index)
  //       k -= index
  //     }
  //     for (let i = 1; i < number.length; i++) {
  //       if (k === 0) break
  //       if (number[i] < number[i + 1]) {
  //         k--
  //         number = number.slice(0, i) + number.slice(i + 1)
  //       }
  //     }
  //   }
  //   return number
}
