let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)'

function solution1(str) {
  let s1 = []
  let s2 = []
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    if (!/[\(\)]/.test(str[i])) temp += str[i]
    else {
      if (str[i] === '(') {
        if (s1.length === 0) s2.push(temp)
        s1.push('(')
      } else {
        s1.pop()
        temp = ''
      }
    }
  }
  return s2.join('')
}
//! 레퍼런스
function solution2(s) {
  let answer
  let stack = []
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x)
  }
  answer = stack.join('')
  return answer
}
