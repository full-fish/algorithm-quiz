function solution(n, m) {
  let gcdNum = gcd(n, m)
  m /= gcdNum
  while (m % 2 === 0) {
    m /= 2
  }
  while (m % 5 === 0) {
    m /= 5
  }
  return m === 1 ? 1 : 2
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b
}
console.log(gcd(6, 25))
//console.log(solution(11, 22))
