let n = 125;
function solution(n) {
  let origin = 1;
  let result = 0;
  let resultArr = [];
  while (n >= origin) {
    origin *= 3;
  }
  while (n > 0) {
    origin /= 3;
    resultArr.push(parseInt(n / origin));
    n = n % origin;
  }
  for (let i = 0; i < resultArr.length; i++) {
    result += Math.pow(3, i) * resultArr[i];
  }
  return result;
}
console.log(solution(125));

const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
console.log(solution2(125));
console.log([...n.toString(3)].reverse().join(""));

function solution3(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
console.log(solution3(n));
