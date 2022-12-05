function solution(n) {
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (divisor(i) >= 3) count++
  }
  return count
}
function divisor(n) {
  const divisors = []
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i)
      if (n / i != i) divisors.push(n / i)
    }
  }
  divisors.sort((a, b) => a - b)
  return divisors.length
}
