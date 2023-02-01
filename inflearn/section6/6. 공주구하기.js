let n = 8
let t = 3
function solution1(n, t) {
  let index = -1
  let arr = [...Array(n).keys()].map(e => e + 1)
  while (arr.length > 1) {
    for (let i = 0; i < t; i++) {
      index++
      if (index >= arr.length) index = 0
    }
    arr.splice(index, 1)
    index--
  }
  return arr[0]
}
//! 레퍼런스
function solution2(n, k) {
  let answer
  let queue = Array.from({ length: n }, (v, i) => i + 1)
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift())
    queue.shift()
    if (queue.length === 1) answer = queue.shift()
  }
  return answer
}
//! 레퍼런스 수정
function solution3(n, k) {
  let queue = [...Array(n).keys()].map(e => e + 1)
  while (queue.length > 1) {
    for (let i = 1; i < k; i++) queue.push(queue.shift())
    queue.shift()
  }
  return queue[0]
}
console.log(solution1(n, t))
console.log(solution2(n, t))
console.log(solution3(n, t))
