function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    findDivisors(i) % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}

function findDivisors(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i != i) divisors.push(n / i);
    }
  }
  return divisors.length;
}
//! 다른 사람 코드
//! 제곱근이 정수면 약수의 갯수가 홀수라는 사실 이용
function solution2(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
console.log(solution2(24, 27));
