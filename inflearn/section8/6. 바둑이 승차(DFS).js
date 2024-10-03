let arr = [81, 58, 42, 33, 61]
let limit = 259
function solution1(arr, limit) {
  let max = 0
  function DFS(L, sum) {
    if (sum > limit) return
    if (L === arr.length) {
      if (max < sum) max = sum
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return max
}
//! 레퍼런스
function solution2(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = arr.length
  function DFS(L, sum) {
    if (sum > c) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}
console.log(solution1(arr, limit));