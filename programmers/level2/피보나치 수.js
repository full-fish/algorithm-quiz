// function solution(n) {
//   let sum = 0;
//   function F(n) {
//     if (n <= 1) return n;
//     return (F(n - 1) + F(n - 2)) % 1234567;
//   }
//   return F(n) % 1234567;
// }
console.time();
console.log(solution(100000));
console.timeEnd();
function solution(n) {
  let fiboArr = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboArr.push((fiboArr[i - 1] % 1234567) + (fiboArr[i - 2] % 1234567));
  }
  return fiboArr[n] % 1234567;
}

// function solution(n) {
//   var answer = 0;
//   answer = fibonacci1234567(n);
//   return answer;
// }
// function fibonacci1234567(n) {
//   //재귀적으로 하면 시간초과
//   let fiboArr = new Array(n + 1).fill(0);
//   fiboArr[0] = 0;
//   fiboArr[1] = 1;
//   for (let i = 2; i <= n; i++) fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567; //1234567로 나눈 나머지로 하지 않으면 정수범위 초과
//   return fiboArr[n];
// }
