let k = 3
let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]
function solution1(k, arr) {
  let p1 = 0
  let p2 = k
  let max = 0
  while (p2 < arr.length) {
    let sum = arr.slice(p1, p2).reduce((a, c) => a + c)
    if (sum > max) max = sum
    p1++
    p2++
  }
  return max
}

//! 레퍼런스!
function solution2(k, arr) {
  let answer,
    sum = 0
  for (let i = 0; i < k; i++) sum += arr[i]
  answer = sum
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]
    answer = Math.max(answer, sum)
  }
  return answer
}
console.log(solution1(k, arr))
console.log(solution2(k, arr))
