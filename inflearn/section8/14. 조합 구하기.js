let n = 30
let r = 7
function solution1(n, r) {
  let arr = [...Array(n).keys()].map(ele => ele + 1)
  let result = []
  function DFS(L, tempArr, arr) {
    if (L === 0) return result.push(tempArr)
    for (let i = 0; i < arr.length; i++) {
      DFS(L - 1, tempArr.concat(arr[i]), arr.slice(i + 1))
    }
  }
  DFS(r, [], arr)
  return result
}
//! 레퍼런스 더 빠름
function solution2(n, m) {
  let answer = []
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i
        DFS(L + 1, i + 1)
      }
    }
  }
  DFS(0, 1)
  return answer
}
