function solution1(n) {
  let arr = [...Array(n).keys()].map(e => e + 1)
  function part(arr, n) {
    let result = []
    function combination(n, tempArr, arr) {
      if (n === 0) return result.push(tempArr)
      for (let i = 0; i < arr.length; i++) {
        combination(n - 1, tempArr.concat(arr[i]), arr.slice(i + 1))
      }
    }
    combination(n, [], arr)
    return result
  }
  let a = []
  for (let i = 1; i <= arr.length; i++) {
    a.push(...part(arr, i))
  }
  return a
}
//! 레퍼런스
function solution2(n) {
  let answer = []
  let ch = Array.from({ length: n + 1 }, () => 0)
  function DFS(L) {
    if (L === n + 1) {
      let tmp = ''
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + ' '
      }
      if (tmp.length > 0) answer.push(tmp.trim())
    } else {
      ch[L] = 1
      DFS(L + 1)
      ch[L] = 0
      DFS(L + 1)
    }
  }
  DFS(1)
  return answer
}
