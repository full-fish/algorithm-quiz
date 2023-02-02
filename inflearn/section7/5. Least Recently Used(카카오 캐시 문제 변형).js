let a = [1, 2, 3, 2, 6, 2, 3, 5, 7, 2, 3, 2, 6, 2, 3, 5, 7]
function solution1(n, a) {
  let stack = new Array(n)
  for (let i = 0; i < a.length; i++) {
    const index = stack.indexOf(a[i])
    index === -1 ? stack.pop() : stack.splice(index, 1)
    stack.unshift(a[i])
  }
  return stack
}
//! 레퍼런스 내꺼가 나음
function solution2(size, arr) {
  let answer = Array.from({ length: size }, () => 0)
  arr.forEach(x => {
    let pos = -1
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    }
    answer[0] = x
  })
  return answer
}
//! 레퍼런스 내꺼가 나음
function solution3(size, arr) {
  let answer = []
  arr.forEach(x => {
    let pos = -1
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i
    if (pos === -1) {
      answer.unshift(x)
      if (answer.length > size) answer.pop()
    } else {
      answer.splice(pos, 1)
      answer.unshift(x)
    }
  })
  return answer
}
