let n = 5
let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
]
function solution1(n, arr) {
  let result = 0
  let graphArr = Array.from({ length: n }, () => Array(n).fill(0))
  // let visited = new Array(n).fill(0)
  let path = []
  arr.forEach(ele => {
    graphArr[ele[0] - 1][ele[1] - 1] = 1
  })
  function DFS(i, visited) {
    if (i === n - 1) {
      return result++
    }

    for (let j = 0; j < n; j++) {
      if (graphArr[i][j] === 1 && visited[j] === 0) {
        visited[j] = 1
        path.push(j)
        DFS(j, visited)
        visited[j] = 0
        path.pop()
      }
    }
  }
  // visited[0] = 1
  DFS(0, [1, 0, 0, 0, 0])
  return result
}
//! 레퍼런스
function solution2(n, arr) {
  let answer = 0
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0))
  let ch = Array.from({ length: n + 1 }, () => 0)
  let path = []
  for (let [a, b] of arr) {
    graph[a][b] = 1
  }
  function DFS(v) {
    if (v === n) {
      answer++
      console.log(path)
    } else {
      for (let i = 1; i <= n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1
          path.push(i)
          DFS(i)
          ch[i] = 0
          path.pop()
        }
      }
    }
  }

  path.push(1)
  ch[1] = 1
  DFS(1)
  return answer
}
//! 레퍼런스 격자 하나 줄인거
function solution3(n, arr) {
  let answer = 0
  let graph = Array.from(Array(n), () => Array(n).fill(0))
  let ch = Array.from({ length: n }, () => 0)
  let path = []
  for (let [a, b] of arr) {
    graph[a - 1][b - 1] = 1
  }
  function DFS(v) {
    if (v === n - 1) {
      answer++
    } else {
      for (let i = 0; i < n; i++) {
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1
          path.push(i)
          DFS(i)
          ch[i] = 0
          path.pop()
        }
      }
    }
  }

  path.push(0)
  ch[0] = 1
  DFS(0)
  return answer
}
