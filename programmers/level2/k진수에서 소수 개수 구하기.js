function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter(ele => isPrime(parseInt(ele))).length
}
function isPrime(num) {
  if (num <= 1 || isNaN(num)) {
    return false
  }
  //짝수중 2는 유일한 소수
  if (num % 2 === 0) {
    return num === 2 ? true : false
  }

  const sqrt = parseInt(Math.sqrt(num))

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}
