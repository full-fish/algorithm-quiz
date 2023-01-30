function solution(n) {
  let multi = 1
  let i = 1
  while (multi <= n) {
    multi *= i
    i++
  }
  return i - 2
}
console.log(solution(7))
console.log(solution(3628800))
// 1 2 6 24
