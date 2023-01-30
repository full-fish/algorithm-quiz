function solution(balls, share) {
  console.log(fac(balls))
  return Math.round(fac(balls) / (fac(share) * fac(balls - share)))
}
function fac(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}
console.log(solution(30, 20))
