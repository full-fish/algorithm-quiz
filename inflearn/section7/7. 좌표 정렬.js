let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
]
function solution1(arr) {
  return arr.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0])
}
//! 레퍼런스
function solution2(arr) {
  let answer = arr
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  })
  return answer
}
//! 레퍼런스 수정
function solution3(arr) {
  return arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
}
console.log(solution1(arr))
console.log(solution2(arr))
console.log(solution3(arr))
