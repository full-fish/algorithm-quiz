let n = 7
function solution1(n) {
  function re(L, memo = { 1: 1, 2: 2 }) {
    return L in memo ? memo[L] : (memo[L] = re(L - 1, memo) + re(L - 2, memo))
  }
  return re(n)
}
//! 레퍼런스
function solution2(n) {
  let answer = 0
  let dy = Array.from({ length: n + 1 }, () => 0)
  dy[1] = 1
  dy[2] = 2
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1]
  }
  answer = dy[n]
  return answer
}
