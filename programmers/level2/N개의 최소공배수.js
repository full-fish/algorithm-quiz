let arr = [2, 6, 8, 14];
function solution(arr) {
  let answer = 0;
  let i = Math.max(...arr);
  while (true) {
    if (arr.every((ele) => i % ele === 0)) {
      answer = i;
      break;
    }
    i++;
  }
  return answer;
}
// console.log(solution(arr));
//! 딴사람꺼
function nlcm(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

console.log(nlcm(arr));
