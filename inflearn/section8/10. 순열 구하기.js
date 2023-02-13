let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let n = 6
function solution1(arr, n) {
  let result = []
  function DFS(L, tempArr) {
    if (L === 0) return result.push(tempArr)
    for (let i = 0; i < arr.length; i++) {
      if (!tempArr.includes(arr[i])) DFS(L - 1, tempArr.concat(arr[i]))
    }
  }
  DFS(n, [])
  return result
}
//! 레퍼런스 제일 빠름 저번처럼 push대신 배열 요소 변경
function solution2(arr, m) {
  let answer = []
  n = arr.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = Array.from({ length: m }, () => 0)
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp[L] = arr[i]
          DFS(L + 1)
          ch[i] = 0
        }
      }
    }
  }
  DFS(0)
  return answer
}
//! 레퍼런스 2번째로 빠름
function solution3(arr, m) {
  let answer = []
  n = arr.length
  let ch = Array.from({ length: n }, () => 0)
  let tmp = []
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp.push(arr[i])
          DFS(L + 1)
          ch[i] = 0
          tmp.pop()
        }
      }
    }
  }
  DFS(0)
  return answer
}
console.time()
console.log(solution1(arr, n))
// console.log(solution2(arr, n))
// console.log(solution3(arr, n))
console.timeEnd()
