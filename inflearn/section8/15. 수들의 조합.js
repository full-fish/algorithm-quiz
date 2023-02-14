let arr = [1, 2, 3, 4, 5, 8, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
let k = 12
let num = 6
function solution1(arr, k, num) {
  let result = []
  function DFS(L, tempArr, arr) {
    if (L === 0) return result.push(tempArr)
    for (let i = 0; i < arr.length; i++) {
      DFS(L - 1, tempArr.concat(arr[i]), arr.slice(i + 1))
    }
  }
  DFS(k, [], arr)
  return result.filter(ele => {
    return ele.reduce((acc, cur) => acc + cur) % num === 0
  }).length
}
function solution2(arr, k, num) {
  let result = 0
  // function DFS(L, sum, arr) {
  //   if (L === 0 && sum % num === 0) return result++
  //   for (let i = 0; i < arr.length; i++) {
  //     DFS(L - 1, sum + arr[i], arr.slice(i + 1))
  //   }
  // }
  const len = arr.length
  function DFS(L, sum, s) {
    if (L === 0 && sum % num === 0) return result++
    for (let i = s; i < len; i++) {
      DFS(L - 1, sum + arr[i], i + 1)
    }
  }
  DFS(k, 0, 0)
  return result
}
//! 레퍼런스
function solution3(n, k, arr, m) {
  let answer = 0
  function DFS(L, s, sum) {
    if (L === k) {
      if (sum % m === 0) answer++
    } else {
      for (let i = s; i < n; i++) {
        DFS(L + 1, i + 1, sum + arr[i])
      }
    }
  }

  DFS(0, 0, 0)
  return answer
}
