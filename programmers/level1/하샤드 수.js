function solution(x) {
  var answer = true
  let sum = 0,
    arrx = []
  arrx = String(x).split('')
  for (let i = 0; i < arrx.length; i++) {
    sum += Number(arrx[i])
  }
  if (x % sum !== 0) {
    answer = false
  }
  return answer
}
