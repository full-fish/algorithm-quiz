function solution1(num) {
  let result = 1
  while (num) {
    result *= num
    num--
  }
  return result
}
function solution2(num) {
  let result = 1
  function F(num, sum) {
    if (num === 1) return (result = sum)
    F(num - 1, sum * num)
  }
  F(num, 1)
  return result
}
//! 레퍼런스
function solution3(n) {
  let answer
  function DFS(n) {
    if (n === 1) return 1
    else return n * DFS(n - 1)
  }
  answer = DFS(n)
  return answer
}
