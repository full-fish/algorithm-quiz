function solution(n) {
  let fiboArr = [1, 1];
  for (let i = 2; i <= n; i++) {
    fiboArr.push((fiboArr[i - 1] + fiboArr[i - 2]) % 1234567);
  }
  return fiboArr[n] % 1234567;
}
//칸 2개면 2가지
// 칸 3개면 12 21 111  3가지
// 칸4개면 1111 112 121 211 22  5가지
// 칸 5개면 11111 1112 1121 1211 2111 122 212 221 8가지
console.log(solution(4));
