function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  //짝수중 2는 유일한 소수
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }

  const sqrt = parseInt(Math.sqrt(num));

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
console.log(solution(10));
