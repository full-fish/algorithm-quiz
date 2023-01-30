let brown = 8;
let yellow = 1;
function solution(brown, yellow) {
  let result = [];
  let divisorArr = findDivisor(brown + yellow);
  for (let i = 0; i < divisorArr.length; i++) {
    if (divisorArr[i] ** 2 - (0.5 * brown + 2) * divisorArr[i] + brown + yellow === 0)
      result.unshift(divisorArr[i]);
  }
  if (result.length === 1) result.push(result[0]);
  return result;
}

function findDivisor(n) {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i != i) divisors.push(n / i);
    }
  }
  divisors.sort((a, b) => a - b);
  return divisors;
}
// brown = 2가로 + 2세로 -4
// brown - 2세로 +4 = 2가로
// 가로 = 0.5brown - 세로 +2

// yellow = (0.5brown - 세로) * (세로 - 2)
// yellow = -세로^2 + (0.5brwon + 2)세로 -brown

// 세로^2 - (0.5brown +2)세로  + brown + yellow = 0
// brown+yellow의 약수중에 가로와 세로가 있다
console.log(solution(brown, yellow));
