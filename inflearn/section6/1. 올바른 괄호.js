function solution1(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') arr.push(str[i])
    else {
      if (arr[arr.length - 1] === '(') arr.pop()
      else return false
    }
    if (arr.length % 2 !== 0) return false
  }
  if (!arr.length) return false
  return true
}
//! 레퍼런스
function solution2(s) {
  let answer = 'YES'
  let stack = []
  for (let x of s) {
    if (x === '(') stack.push(x)
    else {
      if (stack.length === 0) return 'NO'
      stack.pop()
    }
  }
  if (stack.length > 0) return 'NO'
  return answer
}
