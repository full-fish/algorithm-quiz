let n = 33
let r = 19
function solution1(n, r) {
  function C(n, r) {
    if (n === r) return 1
    if (r === 1) return n
    const a = C(n - 1, r - 1) + C(n - 1, r)
    return a
  }
  return C(n, r)
}
function solution2(n, r) {
  let obj = {}
  function C(n, r) {
    if (n === r) return 1
    if (r === 1) return n
    let a = 0
    let b = 0
    obj[[n - 1, r - 1]] ? (a = obj[[n - 1, r - 1]]) : (a = C(n - 1, r - 1))
    obj[[n - 1, r]] ? (b = obj[[n - 1, r]]) : (b = C(n - 1, r))
    const step = a + b
    if (!([n, r] in obj)) obj[[n, r]] = step
    return step
  }
  return C(n, r)
}
//! 레퍼런스
function solution3(n, r) {
  let answer = []
  let dy = Array.from(Array(35), () => Array(35).fill(0))
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  answer = DFS(n, r)
  return answer
}
