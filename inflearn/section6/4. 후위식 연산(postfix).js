let str = '352+*9-'
function solution1(str) {
  let stack = []
  for (let x of str) {
    if (/[\+\-\*\/]/.test(x)) {
      let a = stack.pop()
      let b = stack.pop()
      stack.push(eval(`${b}${x}${a}`))
    } else stack.push(x)
  }
  return stack[0]
}
//! 레퍼런스
function solution2(s) {
  let answer
  let stack = []
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x))
    else {
      let rt = stack.pop()
      let lt = stack.pop()
      if (x === '+') stack.push(lt + rt)
      else if (x === '-') stack.push(lt - rt)
      else if (x === '*') stack.push(lt * rt)
      else if (x === '/') stack.push(lt / rt)
    }
  }
  answer = stack[0]
  return answer
}
