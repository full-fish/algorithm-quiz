function solution(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    let sum = 0;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
    }
  }
  return count;
}
function solution(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
    n -= i;
  }
  return count;
}
console.log(solution(15));
