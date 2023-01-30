let X = '5525'
let Y = '1255'
function solution(X, Y) {
  let result = ''
  for (let i = 9; i >= 0; i--) {
    const lengthArr = [X.match(new RegExp(i, 'g'))?.length, Y.match(new RegExp(i, 'g'))?.length]
    result += String(i).repeat(Math.min(...lengthArr))
  }
  return result === '' ? '-1' : result[0] === '0' ? '0' : result
}
console.log(solution(X, Y))
