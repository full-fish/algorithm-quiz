let m = 5
let arr = [1, 3, 1, 2, 3]
function solution1(m, arr) {
  let p1 = 0
  let p2 = 1
  let result = 0
  while (p1 < arr.length) {
    if (p2 > arr.length) {
      p1++
      p2 = p1 + 1
      continue
    }
    let tempArr = arr.slice(p1, p2)
    let sum = tempArr.reduce((a, c) => a + c)
    if (sum <= m) {
      result++
      p2++
    } else {
      p1++
      p2 = p1 + 1
    }
  }
  return result
}
//! 레퍼런스!
function solution2(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]
    while (sum > m) {
      sum -= arr[lt++]
    }
    answer += rt - lt + 1
  }
  return answer
}
console.log(solution1(m, arr))
console.log(solution2(m, arr))
