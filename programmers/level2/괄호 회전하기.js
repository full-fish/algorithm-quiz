function solution(s) {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    console.log('object')
    if (check(s)) result++
    s = s.slice(s.length - 1) + s.slice(0, s.length - 1)
  }
  return result
}
function check(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] === '[' && s[i] === ']') stack.pop()
    else if (stack[stack.length - 1] === '(' && s[i] === ')') stack.pop()
    else if (stack[stack.length - 1] === '{' && s[i] === '}') stack.pop()
    else stack.push(s[i])
  }
  return stack.length ? false : true
}
