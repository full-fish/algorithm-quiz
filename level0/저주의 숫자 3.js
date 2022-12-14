function solution(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    while (result % 3 === 0 || /3/.test(String(result))) result++
    result++
  }
  return result - 1
}
console.log(solution(40))
