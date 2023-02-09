let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
]
let limit = 20
function solution(arr, limit) {
  let scoreMax = 0
  function DFS(L, scoreSum, timeSum) {
    if (timeSum > limit) return
    if (L === arr.length) {
      if (scoreMax < scoreSum) scoreMax = scoreSum
    } else {
      DFS(L + 1, scoreSum + arr[L][0], timeSum + arr[L][1])
      DFS(L + 1, scoreSum, timeSum)
    }
  }
  DFS(0, 0, 0)
  return scoreMax
}
//! 레퍼런스 풀이 똑같음 근데 나랑 입력을 다르게 받았음 볼필요 없음
function solution2(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER
  let n = ps.length
  function DFS(L, sum, time) {
    if (time > m) return
    if (L === n) {
      answer = Math.max(answer, sum)
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L])
      DFS(L + 1, sum, time)
    }
  }
  DFS(0, 0, 0)
  return answer
}
console.log(solution(arr, limit))
