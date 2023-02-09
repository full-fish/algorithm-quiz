let arr = [1, 3, 5, 6, 7, 10]
function solution(arr) {
  for (let i = 1; i <= ~~(arr.length / 2); i++) {
    let partArr = part(arr, i)
    for (let j = 0; j < partArr.length; j++) {
      let part1 = partArr[j]
      let part2 = arr.filter(ele => {
        return !part1.includes(ele)
      })
      if (sum(part1) === sum(part2)) return 'YES'
    }
  }
  return 'NO'
}
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
function sum(arr) {
  return arr.reduce((a, c) => a + c)
}
//! 레퍼런스
function solution2(arr) {
  let answer = 'NO',
    flag = 0
  let total = arr.reduce((a, b) => a + b, 0)
  let n = arr.length
  function DFS(L, sum) {
    if (flag) return
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES'
        flag = 1
      }
    } else {
      DFS(L + 1, sum + arr[L])
      DFS(L + 1, sum)
    }
  }
  DFS(0, 0)
  return answer
}
