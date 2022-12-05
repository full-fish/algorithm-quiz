let num = 29183,
  k = 1
function solution(num, k) {
  let strArr = String(num).split('')
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === String(k)) {
      return i + 1
    }
  }
  return -1
}
console.log(solution(num, k))
