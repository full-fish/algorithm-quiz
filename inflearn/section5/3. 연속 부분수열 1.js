function solution(m, arr) {
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
    if (sum === m) {
      result++
      p1++
      p2 = p1 + 1
    } else p2++
  }
  return result
}

//! 레퍼런스!
function solution(m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt]
    if (sum === m) answer++
    while (sum >= m) {
      sum -= arr[lt++]
      if (sum === m) answer++
    }
  }
  return answer
}
