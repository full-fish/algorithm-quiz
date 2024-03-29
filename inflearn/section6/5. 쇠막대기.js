let str = '()(((()())(())()))(())'
function solution1(str) {
  let stack = []
  let num = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(str[i])
    else {
      stack.pop()
      if (str[i - 1] === '(') num += stack.length
      else num++
    }
  }
  return num
}
//! 레퍼런스
function solution2(s) {
  let answer = 0
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(')
    else {
      stack.pop()
      if (s[i - 1] === '(') answer += stack.length
      else answer++
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer
}
console.log(solution1(str))
console.log(solution2(str))
