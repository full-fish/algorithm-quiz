function solution(a, b) {
  var answer = 0
  let temp = 0
  //b를 큰수로

  if (a > b) {
    temp = a
    a = b
    b = temp
  } else if (a === b) return a
  for (let i = a; i <= b; i++) {
    answer += i
  }
  return answer
}
