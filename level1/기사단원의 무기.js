function solution(number, limit, power) {
  let result = 0
  for (let i = 1; i <= number; i++) {
    let divisorNum = divisorsF(i)
    if (divisorNum <= limit) result += divisorNum
    else result += power
  }
  return result
}
function divisorsF(n) {
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
