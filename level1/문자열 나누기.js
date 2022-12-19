function solution(s) {
  let result = 0
  let x = '',
    countX = 1,
    countOther = 0
  for (let i = 0; i < s.length; i++) {
    if (x === '') x = s[i]
    else {
      s[i] === x ? countX++ : countOther++
      if (countX === countOther) {
        x = ''
        result++
        countX = 1
        countOther = 0
      }
    }
  }
  if (x !== '') result++
  return result
}
console.log(solution('abracadabra'))
