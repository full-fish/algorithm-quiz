function solution1(num, resultNum) {
  let arr = makeArr(num)
  const arrLen = arr.length
  const arrEleLen = arr[0].length
  let obj = {}
  let dy = Array.from(Array(arrLen), () => Array(arrEleLen).fill(0))
  for (let i = 0; i < arrLen; i++) {
    let sum = 0
    for (let j = 0; j < arrEleLen; j++) {
      //? 메모를 객체로 18초
      // let a = 0
      // obj[[arrEleLen - 1, j]] ? (a = obj[[arrEleLen - 1, j]]) : (a = countOfC(arrEleLen - 1, j))
      // sum += arr[i][j] * a

      //? 메모를 배열로 10초
      // let a = 0
      // if (dy[i][j] > 0) a = dy[i][j]
      // else {
      //   dy[i][j] = countOfC(arrEleLen - 1, j)
      //   a = dy[i][j]
      // }
      // sum += arr[i][j] * a

      //? 메모안하고 10초
      sum += arr[i][j] * countOfC(arrEleLen - 1, j)
    }
    if (sum === resultNum) {
      return arr[i]
    }
  }
}
function countOfC(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r))
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
function makeArr(n) {
  let result = []
  let N = n
  function DFS(n, tempArr) {
    if (n === 0) return result.push(tempArr)
    for (let i = 1; i <= N; i++) {
      if (!tempArr.includes(i)) DFS(n - 1, tempArr.concat(i))
    }
  }
  DFS(n, [])
  return result
}

//! 레퍼런스 영상 확인
function solution2(n, f) {
  let answer,
    flag = 0
  let dy = Array.from(Array(11), () => Array(11).fill(0))
  let ch = Array.from({ length: n + 1 }, () => 0)
  let p = Array.from({ length: n }, () => 0)
  let b = Array.from({ length: n }, () => 0)
  function combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r))
  }
  function DFS(L, sum) {
    if (flag) return
    if (L === n && sum === f) {
      answer = p.slice()
      flag = 1
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1
          p[L] = i
          DFS(L + 1, sum + b[L] * p[L])
          ch[i] = 0
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i)
  }
  DFS(0, 0)
  return answer
}
