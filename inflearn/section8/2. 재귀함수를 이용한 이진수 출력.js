let n = 11
function solution1(n) {
  function DFS(n) {
    if (n === 0) return
    DFS(~~(n / 2))
    console.log(n % 2)
  }
  DFS(n)
}
//! 레퍼런스
function solution2(n) {
  let answer = ''
  function DFS(n) {
    if (n === 0) return
    else {
      DFS(parseInt(n / 2))
      answer += String(n % 2)
    }
  }
  DFS(n)
  return answer
}
console.log(solution1(n))
