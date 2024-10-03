let n = 3
function solution1(n) {
  const repeat = k => {
    if (k > n) return
    console.log(k)
    repeat(++k)
  }
  repeat(1)
}
//! 레퍼런스
function solution2(n) {
  function DFS(L) {
    if (L == 0) return
    else {
      DFS(L - 1)
      console.log(L)
    }
  }
  DFS(n)
}

solution1(n)